// pages/index.js
import { motion } from 'framer-motion';
import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { client, urlFor } from '../lib/sanity';
import { Mail, Instagram, Phone, MessageCircle } from 'lucide-react';
import ContatoForm from '@/components/ContatoForm';
import Footer from '@/components/Footer';
import SocialShareButtons from '@/components/SocialShareButtons';

export async function getStaticProps() {
  const propiedadesCMS = await client.fetch(`*[_type == \"property\"]{
    _id,
    slug,\
    title,\
    description,\
    priceTable,\
    images,\
    documents
  }`);

  return {
    props: {
      propiedadesCMS,
    },
  };
}

const numeroWhatsapp = "+5521968461058";

const mensajesWhatsapp = {
  pt: "Olá! Tenho interesse em um imóvel que vi no site.",
  es: "¡Hola! Estoy interesado en una propiedad que vi en el sitio web.",
  en: "Hello! I'm interested in a property I saw on the website.",
  fr: "Bonjour ! Je suis intéressé par un bien vu sur le site.",
  zh: "你好! 我对网站上看到的一处房产感兴趣。",
  ar: "مرحباً! أنا مهتم بعقارات رأيتها على الموقع.",
  de: "Hallo! Ich interessiere mich für eine Immobilie auf der Website.",
  it: "Ciao! Sono interessato a una proprietà vista sul sito."
};

const idioma =
  typeof window !== "undefined"
    ? (navigator.language || "pt").slice(0, 2)
    : "pt";

const mensaje = encodeURIComponent(
  mensajesWhatsapp[idioma] || mensajesWhatsapp["pt"]
);

const linkWhatsapp = `https://wa.me/${numeroWhatsapp}?text=${mensaje}`;


const idiomas = ['pt', 'es', 'en', 'zh', 'ar', 'de', 'it', 'fr'];
const traducciones = {
  pt: {
    verPropiedades: 'Ver Propriedades',
    explorarBarrios: 'Explorar Bairros',
    buscarPlaceholder: 'Buscar por bairro, tipo ou preço...',
    propiedadesDestacadas: 'Propriedades Destacadas',
  }, 
  es: {
    verPropiedades: 'Ver Propiedades',
    explorarBarrios: 'Explorar Barrios',
    buscarPlaceholder: 'Buscar por barrio, tipo o precio...',
    propiedadesDestacadas: 'Propiedades Destacadas',
  },
  en: { 
    verPropiedades: 'View Properties',
    explorarBarrios: 'Explore Neighborhoods',
    buscarPlaceholder: 'Search by neighborhood, type or price...',
    propiedadesDestacadas: 'Featured Properties',
  },
  zh: {
    verPropiedades: '查看房产',
    explorarBarrios: '探索社区',
    buscarPlaceholder: '按地区、类型或价格搜索...',
    propiedadesDestacadas: '精选房产',
  },
  ar: {
    verPropiedades: 'عرض العقارات',
    explorarBarrios: 'استكشاف الأحياء',
    buscarPlaceholder: 'ابحث حسب الحي أو النوع أو السعر...',
    propiedadesDestacadas: 'العقارات المميزة',
  },
  de: {
    verPropiedades: 'Immobilien anzeigen',
    explorarBarrios: 'Stadtteile erkunden',
    buscarPlaceholder: 'Nach Stadtteil, Typ oder Preis suchen...',
    propiedadesDestacadas: 'Ausgewählte Immobilien',
  },
  it: {
    verPropiedades: 'Vedi Proprietà',
    explorarBarrios: 'Esplora Quartieri',
    buscarPlaceholder: 'Cerca per quartiere, tipo o prezzo...',
    propiedadesDestacadas: 'Proprietà in Evidenza',
  },
  fr: {
    verPropiedades: 'Voir les Propriétés',
    explorarBarrios: 'Explorer les Quartiers',
    buscarPlaceholder: 'Rechercher par quartier, type ou prix...',
    propiedadesDestacadas: 'Propriétés en Vedette',
  },
};
const textosUI = {
  pt: { idioma: 'Idioma 🌐' },
  es: { idioma: 'Idioma 🌐' },
  en: { idioma: 'Language 🌐' },
  zh: { idioma: '语言 🌐' },
  ar: { idioma: 'اللغة 🌐' },
  de: { idioma: 'Sprache 🌐' },
  it: { idioma: 'Lingua 🌐' },
  fr: { idioma: 'Langue 🌐' },
};

export default function Home({ propiedadesCMS }) {
  const [language, setLanguage] = useState('pt');
  const ui = textosUI[language] || textosUI['pt'];
  const [searchTerm, setSearchTerm] = useState('');
  const [showLangMenu, setShowLangMenu] = useState(false);
  const sloganPorIdioma = {
    pt: "Seu paraíso ao alcance de um clique",
    es: "Tu paraíso al alcance de un clic",
    en: "Your paradise just one click away",
    zh: "只需点击即可到达的天堂",
    ar: "جنة في متناول نقرة واحدة",
    de: "Ihr Paradies nur einen Klick entfernt",
    it: "Il tuo paradiso a portata di clic",
    fr: "Votre paradis à portée de clic",
  };
  const t = traducciones[language] || traducciones['pt'];

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const idiomaNavegador = navigator.language?.slice(0, 2) || 'pt';
      if (idiomas.includes(idiomaNavegador)) {
        setLanguage(idiomaNavegador);
      } else { 
        setLanguage('pt');
      }
    }
  }, []);

  const propiedadesDesdeCMS = propiedadesCMS.map((p, i) => ({
    id: i + 1,
    titulo: p.title?.[language] || p.title?.pt,
    descripcion: p.description?.[language] || p.description?.pt,
    precio: p.priceTable?.[0]?.preco || '',
    imagen: p.images?.[0]?.asset || null,
    color: 'blue',
    slug: p.slug.current,
  }));

  const propiedadesLocales = [
    {
      id: 1,
      titulo: 'Copacabana Dreams',
      descripcion: 'Vista al mar y acceso directo a la playa',
      precio: 'R$ 1.200.000',
      imagen: '/prop1.jpg',
      color: 'green',
      slug: 'copacabana-dreams'
    },
    {
      id: 2,
      titulo: 'Leblon Luxo',
      descripcion: 'Ático con terraza panorámica',
      precio: 'R$ 2.800.000',
      imagen: '/prop2.jpg',
      color: 'blue',
      slug: 'leblon-luxo'
    },
    {
      id: 3,
      titulo: 'Ipanema Style',
      descripcion: 'Apartamento moderno en zona cultural',
      precio: 'R$ 950.000',
      imagen: '/prop3.jpg',
      color: 'pink',
      slug: 'ipanema-style'
    }
  ];

  const propiedades = propiedadesDesdeCMS.length > 0 ? propiedadesDesdeCMS : propiedadesLocales;

  const filteredProps = propiedades.filter((prop) =>
    prop.titulo.toLowerCase().includes(searchTerm.toLowerCase()) ||
    prop.descripcion.toLowerCase().includes(searchTerm.toLowerCase()) ||
    prop.precio.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="relative w-full min-h-full overflow-x-hidden bg-black">
      <Head>
        <title>Viva Rio Homes</title>
        <meta name="description" content="Descubra apartamentos, coberturas e imóveis de luxo no Rio de Janeiro com a Viva Rio Homes." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Viva Rio Homes - Imóveis no Rio de Janeiro" />
        <meta property="og:description" content="Explore imóveis incríveis nos melhores bairros do Rio com exclusividad." />
        <meta property="og:image" content="/capa-site.jpg" />
        <meta property="og:url" content="https://vivariohomes.com/" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Viva Rio Homes - Imóveis no Rio de Janeiro" />
        <meta name="twitter:description" content="Apartamentos, coberturas e imóveis de luxo nos bairros mais desejados do Rio." />
        <meta name="twitter:image" content="/capa-site.jpg" />
        <meta name="geo.region" content="BR-RJ" />
        <meta name="geo.placename" content="Barra da Tijuca" />
        <meta name="geo.position" content="-23.0064;-43.3659" />
        <meta name="ICBM" content="-23.0064, -43.3659" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "RealEstateAgent",
              "name": "Viva Rio Homes",
              "image": "https://vivariohomes.com/capa-site.jpg",
              "url": "https://vivariohomes.com",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Barra da Tijuca",
                "addressLocality": "Rio de Janeiro",
                "addressRegion": "RJ",
                "postalCode": "22640-102",
                "addressCountry": "BR"
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+55 21 96846-1058",
                "contactType": "customer service",
                "areaServed": "BR",
                "availableLanguage": ["Portuguese", "Spanish", "English"]
              },
              "sameAs": ["https://instagram.com/gringo_brasileiro777"]
            })
          }}
        />
      </Head>

      <video autoPlay loop muted className="absolute top-0 left-0 w-full h-full object-cover z-0">
        <source src="/rio-bg-video.mp4" type="video/mp4" />
        Tu navegador no soporta video HTML5.
      </video>

      <div className="absolute inset-0 bg-gradient-to-b from-[#ff007f80] to-[#ffe60080] z-10" />

      <div className="relative z-20 flex flex-col items-center justify-center h-screen text-center text-white px-4">
        <div className="text-center mb-10">
          <motion.h2
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-5xl md:text-7xl font-extrabold text-yellow-400 drop-shadow-lg tracking-wide"
          >
            RIO DE JANEIRO
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: 'easeOut' }}
            className="text-lg sm:text-xl md:text-2xl lg:text-4xl carnival-font mt-4 text-white animate-shine text-center px-4"
          >
            {sloganPorIdioma[language]}
          </motion.h3>
        </div>
        <div className="flex flex-col items-center justify-center space-y-4">
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <Link href="/propiedades">
              <button className="bg-white text-pink-600 font-bold py-3 px-6 rounded-full hover:bg-yellow-300 transition-all duration-300 ease-in-out">
                {traducciones[language]?.verPropiedades}
              </button>
            </Link>
            <Link href="/barrios">
              <button className="bg-white text-pink-600 font-bold py-3 px-6 rounded-full hover:bg-yellow-300 transition-all duration-300 ease-in-out">
                {traducciones[language]?.explorarBarrios}
              </button>
            </Link> 
          </div>
          <div className="relative z-[60]">
            <button
              onClick={() => setShowLangMenu(!showLangMenu)}
              className="bg-white text-purple-600 font-bold py-3 px-6 rounded-full hover:bg-pink-300 transition-all duration-300 ease-in-out"
            >
              {ui.idioma}
            </button>
            {showLangMenu && (
              <div className="fixed top-[180px] right-4 bg-white text-black rounded shadow-lg z-[1000] w-[85%] sm:w-auto">
                {idiomas.map((idioma) => (
                  <button
                    key={idioma}
                    onClick={() => {
                      setLanguage(idioma);
                      setShowLangMenu(false);
                    }}
                    className="block px-4 py-2 text-sm hover:bg-gray-100 w-full text-left"
                  >
                    {idioma.toUpperCase()}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="relative z-20 mt-10 w-full max-w-4xl mx-auto px-4">
        <input
          type="text"
          placeholder={
            language === 'es' ? 'Buscar por barrio, tipo o precio...' :
            language === 'en' ? 'Search by neighborhood, type or price...' :
            language === 'zh' ? '按地区、类型或价格搜索...' :
            language === 'ar' ? 'ابحث حسب الحي أو النوع أو السعر...' :
            language === 'de' ? 'Nach Stadtteil, Typ oder Preis suchen...' :
            language === 'it' ? 'Cerca per quartiere, tipo o prezzo...' :
            language === 'fr' ? 'Rechercher par quartier, type ou prix...' :
            'Buscar por bairro, tipo ou preço...' // portugués por defecto
          }  
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-[90%] sm:w-[80%] md:w-[60%] py-2 px-4 rounded-full bg-white/80 text-gray-800 text-sm sm:text-base md:text-lg shadow-md border border-white backdrop-blur-md placeholder-gray-500 focus:outline-none"
        />
      </div>

      <div className="relative z-20 mt-10 w-full max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center">
          {traducciones[language]?.propiedadesDestacadas || "Propiedades Destacadas"}
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {filteredProps.map((prop) => (
            <div key={prop.id} className="bg-white rounded-2xl shadow-xl overflow-hidden">
              {typeof prop.imagen === 'string' ? (
                <img
                  src={prop.imagen}
                  alt={prop.titulo}
                  className="w-full h-48 object-cover"
                />
              ) : (
                <img
                  src={urlFor(prop.imagen).width(800).url()}
                  alt={prop.titulo}
                  className="w-full h-48 object-cover"
                />
              )}
              <div className="p-4">
                <h3 className="text-xl font-semibold text-gray-800">{prop.titulo}</h3>
                <p className="text-sm text-gray-600">{prop.descripcion}</p>
                <p className={`text-lg text-${prop.color}-600 mt-2`}>{prop.precio}</p>
                <Link href={`/propiedades/${prop.slug}`}>
                  <button className={`mt-3 bg-${prop.color}-500 text-white px-4 py-2 rounded-full hover:bg-${prop.color}-600 transition`}>
                    Ver más
                  </button>
                </Link>
                <SocialShareButtons
                  url={`https://vivariohomes.com/propiedades/${prop.slug}`}
                  title={prop.titulo}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <div className="relative z-20 mt-20 w-full max-w-4xl mx-auto px-4">
        <ContatoForm />
      </div>

      <a
        href={linkWhatsapp}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition"
      >
        <MessageCircle className="h-6 w-6 text-white" />
      </a>

      <Footer />
      
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Luckiest+Guy&display=swap');
        .carnival-font {
          font-family: 'Luckiest Guy', cursive;
          text-shadow: 2px 2px 6px rgba(0, 0, 0, 0.6);
        }
        @keyframes shine {
          0% {
            text-shadow: 0 0 10px rgba(255,255,255,0.4);
          }
          50% {
            text-shadow: 0 0 20px rgba(255,255,255,0.8);
          }
          100% {
            text-shadow: 0 0 10px rgba(255,255,255,0.4);
          }
        }
        .animate-shine {
          animation: shine 3s infinite ease-in-out;
        }
      `}</style>
    </div>
  );
}