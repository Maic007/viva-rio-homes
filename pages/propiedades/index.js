import React from 'react';
import Link from 'next/link';
import { client, urlFor } from '../../lib/sanity';

export default function ListaPropiedades({ propiedades }) {
  return (
    <div className="px-6 py-10 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Todas las Propiedades</h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {propiedades.map((prop) => (
          <div key={prop._id} className="border rounded-lg shadow hover:shadow-lg transition overflow-hidden">
            <Link href={`/propiedades/${prop.slug.current}`}>
              <img
                src={urlFor(prop.images[0]).width(600).url()}
                alt={prop.title?.pt || 'Propriedade'}
                className="w-full h-52 object-cover cursor-pointer"
              />
            </Link>
            <div className="p-4">
              <h2 className="text-xl font-semibold">{prop.title?.pt}</h2>
              <p className="text-sm text-gray-600 mt-1">
                {prop.description?.pt?.substring(0, 90)}...
              </p>
              <Link href={`/propiedades/${prop.slug.current}`}>
                <span className="text-blue-600 hover:underline mt-2 inline-block">Ver detalles →</span>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const propiedades = await client.fetch(`*[_type == "property"]{_id, title, slug, description, images}`);
  return {
    props: { propiedades },
  };
}
