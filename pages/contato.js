// pages/contato.js
import Head from 'next/head';
import ContatoForm from '../components/ContatoForm';

export default function ContatoPage() {
  return (
    <>
      <Head>
        <title>Contato | Viva Rio Homes</title>
      </Head>
      <div className="min-h-screen bg-gradient-to-b from-purple-800 via-pink-500 to-yellow-300 flex items-center justify-center py-16 px-4">
        <div className="max-w-2xl w-full">
          <h1 className="text-3xl md:text-4xl font-bold text-white text-center mb-6">
            Fale conosco
          </h1>
          <ContactoForm />
        </div>
      </div>
    </>
  );
}
