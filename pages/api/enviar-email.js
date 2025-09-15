
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end();

  // Se extraen las variables con los nombres correctos
  const { nome, email, mensagem } = req.body;

  if (!nome || !email || !mensagem) {
    return res.status(400).json({ error: 'Faltan campos obligatorios' });
  }

  try {
    const data = await resend.emails.send({
      from: 'Viva Rio Homes <onboarding@resend.dev>',
      to: [process.env.EMAIL_TO],
      subject: `Mensaje de ${nome} desde la web`,
      html: `
        <strong>Nombre:</strong> ${nome}<br />
        <strong>Email:</strong> ${email}<br />
        <br />
        <strong>Mensaje:</strong><br />
        <p>${mensagem}</p>
      `,
    });

    return res.status(200).json({ success: true, data });
  } catch (error) {
    console.error('Error al enviar email:', error);
    return res.status(500).json({ error: 'Error al enviar el mensaje.' });
  }
}