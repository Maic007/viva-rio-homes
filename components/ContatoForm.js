import { useState, useEffect } from 'react';

export default function ContatoForm() {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    mensagem: '',
  });

  const [status, setStatus] = useState(null);
  const [language, setLanguage] = useState('pt');

  const traducciones = {
    pt: {
      title: 'Fale conosco',
      name: 'Seu nome',
      email: 'Seu e-mail',
      message: 'Sua mensagem',
      button: 'Enviar',
      success: 'Mensagem enviada com sucesso!',
      error: 'Erro ao enviar a mensagem. Tente novamente.',
    },
    es: {
      title: 'Contáctanos',
      name: 'Tu nombre',
      email: 'Tu email',
      message: 'Tu mensaje',
      button: 'Enviar',
      success: '¡Mensaje enviado con éxito!',
      error: 'Error al enviar el mensaje. Intenta nuevamente.',
    },
    en: {
      title: 'Contact us',
      name: 'Your name',
      email: 'Your email',
      message: 'Your message',
      button: 'Send',
      success: 'Message sent successfully!',
      error: 'Error sending message. Please try again.',
    },
    zh: {
      title: '联系我们',
      name: '您的姓名',
      email: '您的电子邮箱',
      message: '您的留言',
      button: '发送',
      success: '消息发送成功！',
      error: '发送消息失败，请重试。',
    },
    ar: {
      title: 'اتصل بنا',
      name: 'اسمك',
      email: 'بريدك الإلكتروني',
      message: 'رسالتك',
      button: 'إرسال',
      success: 'تم إرسال الرسالة بنجاح!',
      error: 'حدث خطأ أثناء إرسال الرسالة. حاول مرة أخرى.',
    },
    de: {
      title: 'Kontaktiere uns',
      name: 'Dein Name',
      email: 'Deine E-Mail',
      message: 'Deine Nachricht',
      button: 'Senden',
      success: 'Nachricht erfolgreich gesendet!',
      error: 'Fehler beim Senden der Nachricht. Bitte versuche es erneut.',
    },
    it: {
      title: 'Contattaci',
      name: 'Il tuo nome',
      email: 'La tua email',
      message: 'Il tuo messaggio',
      button: 'Invia',
      success: 'Messaggio inviato con successo!',
      error: 'Errore nell\'invio del messaggio. Riprova.',
    },
    fr: {
      title: 'Contactez-nous',
      name: 'Votre nom',
      email: 'Votre e-mail',
      message: 'Votre message',
      button: 'Envoyer',
      success: 'Message envoyé avec succès !',
      error: 'Erreur lors de l\'envoi du message. Veuillez réessayer.',
    },
  };

  const idiomaNavegador = typeof window !== 'undefined' ? navigator.language.slice(0, 2) : 'pt';

  useEffect(() => {
    if (Object.keys(traducciones).includes(idiomaNavegador)) {
      setLanguage(idiomaNavegador);
    }
  }, []);

  const t = traducciones[language];

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('/api/enviar-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ nome: '', email: '', mensagem: '' });
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error(error);
      setStatus('error');
    }
  };

  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat py-20"
      style={{
        backgroundImage: `url('/fondo-contacto.jpg')`, // agrega esta imagen a /public si no existe
      }}
    >
      <div className="absolute inset-0 bg-black opacity-70"></div>

      <div className="relative z-10 max-w-xl mx-auto px-4">
        <h2 className="text-4xl font-bold mb-8 text-center text-yellow-400 drop-shadow-lg">{t.title}</h2>

        <form
          onSubmit={handleSubmit}
          className="bg-gray-900 bg-opacity-80 backdrop-blur-md p-6 rounded-lg shadow-2xl flex flex-col gap-4"
        >
          <input
            type="text"
            name="nome"
            value={formData.nome}
            onChange={handleChange}
            placeholder={t.name}
            required
            className="px-4 py-3 rounded bg-gray-800 text-white placeholder-gray-400 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-yellow-400 transition"
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder={t.email}
            required
            className="px-4 py-3 rounded bg-gray-800 text-white placeholder-gray-400 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-yellow-400 transition"
          />
          <textarea
            name="mensagem"
            value={formData.mensagem}
            onChange={handleChange}
            placeholder={t.message}
            required
            rows={5}
            className="px-4 py-3 rounded bg-gray-800 text-white placeholder-gray-400 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-yellow-400 transition"
          />
          <button
            type="submit"
            className="bg-yellow-400 text-black py-3 rounded font-bold hover:bg-yellow-500 transition"
          >
            {t.button}
          </button>

          {status === 'success' && (
            <p className="text-green-400 text-center animate-pulse">{t.success}</p>
          )}
          {status === 'error' && (
            <p className="text-red-500 text-center animate-shake">{t.error}</p>
          )}
        </form>
      </div>
    </section>
  );
}
