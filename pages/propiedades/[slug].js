import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { client, urlFor } from '../../lib/sanity';
import Head from 'next/head';
import Link from 'next/link';
import JSZip from 'jszip';
import { saveAs } from 'file-saver';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';
import Image from 'next/image';


const idiomas = ['pt', 'es', 'en', 'zh', 'ar', 'de', 'it', 'fr'];
const idiomaNavegador = typeof window !== 'undefined' ? navigator.language.slice(0, 2) : 'pt';
const idioma = idiomas.includes(idiomaNavegador) ? idiomaNavegador : 'pt';


export async function getStaticPaths() {
  const slugs = await client.fetch(`*[_type == "property" && defined(slug.current)][].slug.current`);
  const paths = slugs.map((slug) => ({ params: { slug } }));
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const property = await client.fetch(
    `*[_type == "property" && slug.current == $slug][0]{
      ..., 
      images[]{..., asset->},
      documents[]{..., file{..., asset->}}
    }`,
    { slug: params.slug }
  );

  if (!property) {
    return { notFound: true };
  }

  return { props: { property } };
}

export default function PropertyPage({ property }) {
  const router = useRouter();
  const [language, setLanguage] = useState('pt');
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const idiomas = ['pt', 'es', 'en', 'zh', 'ar', 'de', 'it', 'fr'];
  const [idioma, setIdioma] = useState('pt');

  useEffect(() => {
    const navLang = typeof window !== 'undefined' ? navigator.language.slice(0, 2) : 'pt';
    if (idiomas.includes(navLang)) {
      setIdioma(navLang);
    }
  }, []);


  const { title, description, priceTable, images, documents } = property;
  const displayTitle = title?.[language] || title?.pt;
  const displayDescription = description?.[language] || description?.pt;

  const handleDownloadAllPDFs = async () => {
    if (!documents || documents.length === 0) return;
    const zip = new JSZip();
    for (const [index, doc] of documents.entries()) {
      const url = doc.file?.asset?.url;
      if (!url) continue;
      const response = await fetch(url);
      const blob = await response.blob();
      const filename = doc.description ? `${doc.description}.pdf` : `documento-${index + 1}.pdf`;
      zip.file(filename, blob);
    }
    const zipBlob = await zip.generateAsync({ type: 'blob' });
    saveAs(zipBlob, `${displayTitle || 'documentos'}.zip`);
  };

  return (
    <div className="min-h-screen bg-white text-gray-800 px-6 py-10">
      <Head>
        <title>{property?.title?.[idioma] || property?.title?.pt} | Viva Rio Homes</title>
        <meta
          name="description"
          content={
            `Descubre más sobre la propiedad "' +
            (property?.title?.[idioma] || property?.title?.pt) +
            '"'
          }  
            Array.isArray(property?.description)
              ? property.description[0]?.children?.[0]?.text?.slice(0, 150)
              : property?.description?.slice?.(0, 150)
          }...`}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Product",
              "name": property?.title || "Imóvel em Rio de Janeiro",
              "image": property?.images?.length ? property.images.map(img => urlFor(img).url()) : [],
              "description": property?.description?.pt || "Apartamento no Rio de Janeiro",
              "brand": {
                "@type": "Organization",
                "name": "Viva Rio Homes"
              },
              "offers": {
                "@type": "AggregateOffer",
                "priceCurrency": "BRL",
                "lowPrice": property?.priceTable?.[0]?.preco?.replace(/[^\d]/g, "") || "100000",
                "highPrice": property?.priceTable?.slice(-1)?.[0]?.preco?.replace(/[^\d]/g, "") || "1000000",
                "offerCount": property?.priceTable?.length || 1
              }
            })
          }}
        />
      </Head>

      <div className="max-w-5xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold">{displayTitle}</h1>
          <select
            className="border px-3 py-1 rounded"
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
          >
            {idiomas.map((id) => (
              <option key={id} value={id}>
                {id.toUpperCase()}
              </option>
            ))}
          </select>
        </div>

        {/* Carrusel horizontal con lightbox */}
        {images?.length > 0 && (
          <div className="overflow-x-auto flex gap-4 mb-6 scrollbar-hide">
            {images.map((image, index) => (
              <div
                key={index}
                className="relative h-48 w-80 flex-shrink-0 cursor-pointer"
                onClick={() => {
                  setCurrentIndex(index);
                  setLightboxOpen(true);
                }}
              >
                <Image           
                  src={urlFor(image).width(800).url()}
                  alt={displayTitle}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg"
                />
              </div>
            ))}

           <Lightbox
             open={lightboxOpen}
             close={() => setLightboxOpen(false)}
             index={currentIndex}
             slides={images.map((img) => ({ src: urlFor(img).url() }))}
          />
        </div>
      )}

        <p className="text-lg mb-6 whitespace-pre-line">{displayDescription}</p>

        {priceTable?.length > 0 && (
          <>
            <h2 className="text-2xl font-semibold mb-2">Tabela de Preços</h2>
            <table className="w-full border mb-8">
              <thead>
                <tr className="bg-gray-100">
                  <th className="p-2 border">Tipo</th>
                  <th className="p-2 border">Metragem</th>
                  <th className="p-2 border">Preço</th>
                </tr>
              </thead>
              <tbody>
                {priceTable.map((item, idx) => (
                  <tr key={idx}>
                    <td className="p-2 border">{item.tipo}</td>
                    <td className="p-2 border">{item.metragem}</td>
                    <td className="p-2 border">{item.preco}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </>
        )}

        {/* Documentos PDF */}
        {documents?.length > 0 && (
          <div className="mb-10">
            <h3 className="text-xl font-semibold mb-4">Documentos:</h3>
            <ul className="list-disc ml-6 space-y-2">
              {documents.map((doc, i) => {
                const docUrl = doc.file?.asset?.url;
                return (
                  <li key={i}>
                    {docUrl ? (
                      <>
                        <a
                          href={docUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-600 underline mr-4"
                        >
                          📄 {doc.description || `Documento ${i + 1}`} (Ver)
                        </a>
                        <a
                          href={docUrl}
                          download
                          className="text-green-600 underline"
                        >
                          ⬇ Baixar
                        </a>
                      </>
                    ) : (
                      <span className="text-red-500">Arquivo indisponível</span>
                    )}
                  </li>
                );
              })}
            </ul>
            
          </div>
        )}

        {/* Botões */}
        <Link href="/">
          <span className="inline-block mt-4 bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700 cursor-pointer">
            ← Voltar à Página Inicial
          </span>
        </Link>

        <a
          href="https://wa.me/5521968461058"
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 10.5A9 9 0 1012 3a9 9 0 00-9 7.5zm9 6.5v.01M9.75 9.75L12 12l2.25-2.25" />
          </svg>
        </a>
      </div>
    </div>
  );
}
