
// pages/api/enviarCorreo.js
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end();

  const { nombre, email, mensaje } = req.body;

  try {
    const data = await resend.emails.send({
      from: 'Viva Rio Homes <onboarding@resend.dev>',
      to: [process.env.EMAIL_TO],
      subject: 'Nuevo contacto desde la página web',
      html: `
        <strong>Nombre:</strong> ${nombre}<br />
        <strong>Email:</strong> ${email}<br />
        <strong>Mensaje:</strong><br />
        <p>${mensaje}</p>
      `,
    });

    return res.status(200).json({ success: true, data });
  } catch (error) {
    console.error('Error al enviar email:', error);
    return res.status(500).json({ error: 'Error al enviar el mensaje.' });
  }
}
