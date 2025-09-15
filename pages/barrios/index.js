import Link from 'next/link';
import { client } from '../../lib/sanity';

export default function ListaBarrios({ barrios }) {
  return (
    <div className="max-w-4xl mx-auto px-6 py-10">
      <h1 className="text-3xl font-bold mb-6 text-white text-center">Explorar Barrios</h1>
      <ul className="grid md:grid-cols-2 gap-4">
        {barrios.map((bairro) => (
          <li key={bairro}>
            <Link
              href={`/barrios/${encodeURIComponent(bairro.toLowerCase().replace(/\s+/g, '-'))}`}
              className="block bg-white p-6 rounded-lg shadow-md text-center text-black font-semibold transition transform hover:-translate-y-1 hover:scale-105 hover:bg-yellow-100"
            >
              {bairro}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export async function getStaticProps() {
  const data = await client.fetch(`*[_type == "property"]{bairro}`);
  const barriosUnicos = [...new Set(data.map((p) => p.bairro).filter(Boolean))];
  return {
    props: {
      barrios: barriosUnicos,
    },
  };
}
