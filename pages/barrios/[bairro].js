
import React from 'react';
import Link from 'next/link';
import { client } from '../../lib/sanity';

export default function ListaPropiedadesPorBarrio({ bairro, propiedades }) {
  return (
    <div className="min-h-screen bg-black text-white py-10 px-6">
      <h1 className="text-3xl font-bold mb-6 capitalize">
        Propiedades en {bairro}
      </h1>

      {propiedades.length === 0 ? (
        <p className="text-gray-400 mb-8">
          No hay propiedades disponibles en este barrio por ahora.
        </p>
      ) : (
        <ul className="grid md:grid-cols-2 gap-6">
          {propiedades.map((prop) => (
            <li key={prop._id} className="bg-white text-black rounded p-4">
              <Link href={`/propiedades/${prop.slug.current}`}>
                <div className="text-lg font-bold mb-2">{prop.title.pt}</div>
                <p className="text-sm">{prop.description.pt}</p>
              </Link>
            </li>
          ))}
        </ul>
      )}

      <Link href="/barrios">
        <p className="mt-10 text-purple-400 hover:underline">
          ← Volver a la lista de barrios
        </p>
      </Link>
    </div>
  );
}

export async function getStaticPaths() {
  const data = await client.fetch(`*[_type == "property" && defined(bairro)].bairro`);
  const barriosUnicos = [...new Set(data.map((b) => b.toLowerCase().replace(/ /g, '-')))];

  const paths = barriosUnicos.map((b) => ({
    params: { bairro: b },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const barrioParam = params.bairro.replace(/-/g, ' ').toLowerCase();

  const propiedades = await client.fetch(
    `*[_type == "property" && lower(bairro) == $bairro]{
      _id, title, slug, description, images
    }`,
    { bairro: barrioParam }
  );

  return {
    props: {
      bairro: barrioParam,
      propiedades,
    },
  };
}
