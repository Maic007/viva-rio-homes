// components/ContatoForm.js
import React, { useState } from 'react';

const ContatoForm = () => {
  const [status, setStatus] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.target;
    const data = new FormData(form);
    
    try {
      const response = await fetch(form.action, {
        method: form.method,
        body: data,
        headers: {
          'Accept': 'application/json',
        },
      });

      if (response.ok) {
        setStatus('SUCCESS');
        form.reset();
      } else {
        setStatus('ERROR');
      }
    } catch (error) {
      setStatus('ERROR');
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto p-8 rounded-lg shadow-xl bg-white bg-opacity-90 backdrop-blur-md">
      <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">Contáctanos</h2>
      <form
        onSubmit={handleSubmit}
        action="https://formspree.io/f/https://formspree.io/f/xandkwnb" // ⚠️ Cambia 'tu-id-de-formspree' por tu ID real
        method="POST"
        className="space-y-4"
      >
        <div>
          <label htmlFor="nombre" className="block text-gray-700 font-semibold mb-2">Nombre</label>
          <input
            type="text"
            id="nombre"
            name="nombre"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <label htmlFor="mensaje" className="block text-gray-700 font-semibold mb-2">Mensaje</label>
          <textarea
            id="mensaje"
            name="mensaje"
            rows="4"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white font-bold py-3 px-6 rounded-full hover:bg-blue-700 transition-colors"
        >
          Enviar Mensaje
        </button>
      </form>
      {status === 'SUCCESS' && <p className="mt-4 text-center text-green-600 font-semibold">¡Gracias! Tu mensaje ha sido enviado.</p>}
      {status === 'ERROR' && <p className="mt-4 text-center text-red-600 font-semibold">Hubo un error al enviar el mensaje. Intenta de nuevo.</p>}
    </div>
  );
};

export default ContatoForm;