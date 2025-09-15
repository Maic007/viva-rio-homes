// components/SocialShareButtons.js
import React from 'react';
import { FacebookShareButton, WhatsappShareButton } from 'react-share';
import { FaFacebookF, FaWhatsapp } from 'react-icons/fa';

const SocialShareButtons = ({ url, title }) => {
  return (
    <div className="flex space-x-4 mt-6">
      {/* Botón para compartir en WhatsApp */}
      <WhatsappShareButton url={url} title={title}>
        <div className="flex items-center space-x-2 p-2 rounded-full bg-green-500 text-white hover:bg-green-600 transition-colors cursor-pointer">
          <FaWhatsapp size={24} />
          <span>Compartir en WhatsApp</span>
        </div>
      </WhatsappShareButton>

      {/* Botón para compartir en Facebook */}
      <FacebookShareButton url={url} quote={title}>
        <div className="flex items-center space-x-2 p-2 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition-colors cursor-pointer">
          <FaFacebookF size={24} />
          <span>Compartir en Facebook</span>
        </div>
      </FacebookShareButton>
    </div>
  );
};

export default SocialShareButtons;
