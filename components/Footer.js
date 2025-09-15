import Link from "next/link";
import { Mail, Instagram, MessageCircle, Info, Shield, Phone } from "lucide-react";
import React from 'react';
import { useRouter } from "next/router";


const textosFooter = {
  pt: {
    contactanos: "Contate-nos",
    descripcion: "Seu paraíso no Rio. Apartamentos, coberturas e imóveis com lazer completo e localização privilegiada.",
    siganos: "Siga-nos",
    instagram: "Instagram",
    email: "Email",
    whatsapp: "WhatsApp",
    derechos: "Todos os direitos reservados."
  },
  es: {
    contactanos: "Contáctanos",
    descripcion: "Tu paraíso en Río. Apartamentos, coberturas e inmuebles con ubicación privilegiada.",
    siganos: "Síguenos",
    instagram: "Instagram",
    email: "Email",
    whatsapp: "WhatsApp",
    derechos: "Todos los derechos reservados."
  },
  en: {
    contactanos: "Contact us",
    descripcion: "Your paradise in Rio. Apartments, penthouses, and properties with privileged location.",
    siganos: "Follow us",
    instagram: "Instagram",
    email: "Email",
    whatsapp: "WhatsApp",
    derechos: "All rights reserved."
  },
  zh: {
    contactanos: "联系我们",
    descripcion: "里约热内卢的天堂。优越位置的公寓和顶层公寓。",
    siganos: "关注我们",
    instagram: "Instagram",
    email: "电子邮件",
    whatsapp: "WhatsApp",
    derechos: "保留所有权利。"
  },
  ar: {
    contactanos: "اتصل بنا",
    descripcion: "جنة في ريو. شقق وبنتهاوس بموقع مميز.",
    siganos: "تابعنا",
    instagram: "انستغرام",
    email: "البريد الإلكتروني",
    whatsapp: "واتساب",
    derechos: "جميع الحقوق محفوظة."
  },
  de: {
    contactanos: "Kontaktieren Sie uns",
    descripcion: "Ihr Paradies in Rio. Apartments und Penthouses in bester Lage.",
    siganos: "Folgen Sie uns",
    instagram: "Instagram",
    email: "E-Mail",
    whatsapp: "WhatsApp",
    derechos: "Alle Rechte vorbehalten."
  },
  it: {
    contactanos: "Contattaci",
    descripcion: "Il tuo paradiso a Rio. Appartamenti e attici in posizione privilegiata.",
    siganos: "Seguici",
    instagram: "Instagram",
    email: "Email",
    whatsapp: "WhatsApp",
    derechos: "Tutti i diritti riservati."
  },
  fr: {
    contactanos: "Contactez-nous",
    descripcion: "Votre paradis à Rio. Appartements et penthouses bien situés.",
    siganos: "Suivez-nous",
    instagram: "Instagram",
    email: "Email",
    whatsapp: "WhatsApp",
    derechos: "Tous droits réservés."
  },
};

const mensajesWhatsapp = {
    pt: "Olá! Tenho interesse em um imóvel que vi no site.",
    es: "¡Hola! Estoy interesado en una propiedad que vi en el sitio web.",
    en: "Hello! I'm interested in a property I saw on the website.",
    fr: "Bonjour ! Je suis intéressé par un bien vu sur le site.",
    zh: "你好！我对网站上看到的一处房产感兴趣。",
    ar: "مرحبًا! أنا مهتم بعقار رأيته على الموقع.",
    de: "Hallo! Ich interessiere mich für eine Immobilie auf der Website.",
    it: "Ciao! Sono interessato a una proprietà vista sul sito."
};


export default function Footer() {

  const { locale } = useRouter();
  const idioma = locale || "pt"; // fallback a portugués  


  const numeroWhatsapp = "5521968461058";
  const mensaje = encodeURIComponent(
    mensajesWhatsapp[idioma] || mensajesWhatsapp["pt"]
  );  

  const linkWhatsapp = `https://wa.me/${numeroWhatsapp}?text=${mensaje}`;

  

  const t = textosFooter[idioma] || textosFooter["pt"]; 

  
    

   


  return (
    <footer className="relative mt-12 z-50 border-t border-gray-700">
      {/* Fondo con opacidad */}
      <div className="absolute inset-0">
        <img
          src="/footer-bg.jpg"
          alt="Fondo"
          className="w-full h-full object-cover"
        />
      
        {/* Capa oscura encima */}
        <img
          src="/fondo-contacto.jpg" // Reemplaza "/ruta-a-tu-imagen.jpg" con la ruta real de tu imagen
          alt="Fondo del footer"
          className="absolute inset-0 w-full h-full object-cover z-0"
        />
        </div>


      {/* Contenido */}
      <div className="relative text-white py-10 max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-6">
        {/* Columna izquierda */}
        <div>
          <h2 className="text-lg font-semibold">Viva Rio Homes</h2>
          <p className="text-sm">{t.descripcion}</p>
          <p className="text-xs text-white">
            © {new Date().getFullYear()} Viva Rio Homes. {t. derechos}
            {t.derechos || t.droits || t.rights || t.rechte || t.diritti || t.حقوق}
          </p>
        </div>

        {/* Columna derecha con links e íconos */}
        <div className="flex flex-col space-y-3 md:items-end">
          <Link href="/sobre" className="flex items-center gap-2 hover:underline">
            <Info className="w-4 h-4 text-white" /> {t?.links?.sobre || "Sobre"}
          </Link>
          <Link href="/contato" className="flex items-center gap-2 hover:underline">
            <Phone className="w-4 h-4 text-blue-400" /> {t?.links?.contato || "Contato"}
          </Link>
          <Link href="/privacidade" className="flex items-center gap-2 hover:underline">
            <Shield className="w-4 h-4 text-orange-500" /> {t?.links?.privacidad || "Privacidade"}
          </Link>
          <a
            href="mailto:marcobrasil777@gmail.com"
            className="flex items-center gap-2 hover:underline"
          >
            <Mail className="w-4 h-4 text-red-500" /> Email
          </a>
          <a
            href="https://www.instagram.com/gringo_brasileiro777"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:underline"
          >
            <Instagram className="w-4 h-4 text-purple-500" /> Instagram
          </a>
          <a
            href="https://wa.me/5521968461058?text=Olá%2C%20tenho%20interesse%20nos%20imóveis!"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:underline text-green-400"
          >
            <MessageCircle className="w-4 h-4 text-green-400" /> WhatsApp
          </a>           
        </div>
      </div>
    </footer>
  );
}

