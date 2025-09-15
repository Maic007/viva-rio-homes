import React, { useState, useEffect } from 'react';
import Head from 'next/head';

export default function Privacidade() {
  const [language, setLanguage] = useState('pt'); // Idioma por defecto es portugués

  const traducciones = {
    pt: {
      title: 'Política de Privacidade',
      lastUpdated: 'Última atualização: 15 de setembro de 2025',
      intro: 'A sua privacidade é de extrema importância para a Viva Rio Homes. Esta Política de Privacidade descreve como coletamos, usamos e protegemos as suas informações pessoais quando você utiliza o nosso site.',
      dataCollectionTitle: '1. Coleta e Uso de Informações',
      dataCollectionText: 'Nós coletamos informações que você nos fornece diretamente através do formulário de contato, incluindo seu nome e endereço de e-mail. Essas informações são usadas exclusivamente para responder às suas perguntas e fornecer os serviços solicitados.',
      dataSharingTitle: '2. Compartilhamento de Informações',
      dataSharingText: 'A Viva Rio Homes não vende, aluga ou compartilha as suas informações pessoais com terceiros. A sua privacidade é a nossa prioridade.',
      dataSecurityTitle: '3. Segurança dos Dados',
      dataSecurityText: 'Tomamos medidas razoáveis para proteger as informações pessoais que coletamos. No entanto, nenhum método de transmissão pela Internet ou armazenamento eletrônico é 100% seguro.',
      cookiesTitle: '4. Cookies',
      cookiesText: 'O nosso site pode usar "cookies" para melhorar a sua experiência. Você pode configurar o seu navegador para recusar cookies, mas isso pode afetar a funcionalidade de algumas partes do site.',
      userRightsTitle: '5. Os Seus Direitos',
      userRightsText: 'Você tem o direito de acessar, corrigir ou solicitar a exclusão das suas informações pessoais a qualquer momento. Se tiver alguma dúvida ou precisar de assistência, por favor, entre em contato conosco através do nosso formulário.',
      changesTitle: '6. Alterações a esta Política',
      changesText: 'Esta Política de Privacidade pode ser atualizada periodicamente. Recomendamos que você a revise regularmente para se manter informado sobre como estamos protegendo as suas informações.',
      contactInfoTitle: '7. Contato',
      contactInfoText: 'Se tiver alguma dúvida sobre esta Política de Privacidade, por favor, entre em contato conosco.',
    },
    es: {
      title: 'Política de Privacidad',
      lastUpdated: 'Última actualización: 15 de septiembre de 2025',
      intro: 'Tu privacidad es de extrema importancia para Viva Rio Homes. Esta Política de Privacidad describe cómo recopilamos, usamos y protegemos tu información personal cuando utilizas nuestro sitio web.',
      dataCollectionTitle: '1. Recopilación y Uso de Información',
      dataCollectionText: 'Recopilamos la información que nos proporcionas directamente a través del formulario de contacto, incluyendo tu nombre y dirección de correo electrónico. Esta información se utiliza exclusivamente para responder a tus consultas y proporcionar los servicios solicitados.',
      dataSharingTitle: '2. Compartición de Información',
      dataSharingText: 'Viva Rio Homes no vende, alquila ni comparte tu información personal con terceros. Tu privacidad es nuestra prioridad.',
      dataSecurityTitle: '3. Seguridad de los Datos',
      dataSecurityText: 'Tomamos medidas razonables para proteger la información personal que recopilamos. Sin embargo, ningún método de transmisión por Internet o almacenamiento electrónico es 100% seguro.',
      cookiesTitle: '4. Cookies',
      cookiesText: 'Nuestro sitio web puede usar "cookies" para mejorar tu experiencia. Puedes configurar tu navegador para rechazar las cookies, pero esto podría afectar la funcionalidad de algunas partes del sitio.',
      userRightsTitle: '5. Tus Derechos',
      userRightsText: 'Tienes derecho a acceder, corregir o solicitar la eliminación de tu información personal en cualquier momento. Si tienes alguna pregunta o necesitas ayuda, por favor, contáctanos a través de nuestro formulario.',
      changesTitle: '6. Cambios en esta Política',
      changesText: 'Esta Política de Privacidad puede ser actualizada periódicamente. Te recomendamos que la revises regularmente para mantenerte informado sobre cómo estamos protegiendo tu información.',
      contactInfoTitle: '7. Contacto',
      contactInfoText: 'Si tienes alguna pregunta sobre esta Política de Privacidad, por favor, contáctanos.',
    },
    en: {
      title: 'Privacy Policy',
      lastUpdated: 'Last updated: September 15, 2025',
      intro: 'Your privacy is of utmost importance to Viva Rio Homes. This Privacy Policy describes how we collect, use, and protect your personal information when you use our website.',
      dataCollectionTitle: '1. Information Collection and Use',
      dataCollectionText: 'We collect information you provide directly to us through the contact form, including your name and email address. This information is used exclusively to respond to your inquiries and provide the requested services.',
      dataSharingTitle: '2. Information Sharing',
      dataSharingText: 'Viva Rio Homes does not sell, rent, or share your personal information with third parties. Your privacy is our priority.',
      dataSecurityTitle: '3. Data Security',
      dataSecurityText: 'We take reasonable measures to protect the personal information we collect. However, no method of transmission over the Internet or electronic storage is 100% secure.',
      cookiesTitle: '4. Cookies',
      cookiesText: 'Our website may use "cookies" to enhance your experience. You can configure your browser to refuse cookies, but this may affect the functionality of some parts of the site.',
      userRightsTitle: '5. Your Rights',
      userRightsText: 'You have the right to access, correct, or request the deletion of your personal information at any time. If you have any questions or need assistance, please contact us through our form.',
      changesTitle: '6. Changes to this Policy',
      changesText: 'This Privacy Policy may be updated periodically. We recommend that you review it regularly to stay informed about how we are protecting your information.',
      contactInfoTitle: '7. Contact',
      contactInfoText: 'If you have any questions about this Privacy Policy, please contact us.',
    },
    zh: {
      title: '隐私政策',
      lastUpdated: '最后更新日期：2025年9月15日',
      intro: '您的隐私对 Viva Rio Homes 至关重要。本隐私政策描述了您在使用我们网站时，我们如何收集、使用和保护您的个人信息。',
      dataCollectionTitle: '1. 信息收集与使用',
      dataCollectionText: '我们通过联系表单直接收集您提供给我们的信息，包括您的姓名和电子邮件地址。这些信息仅用于回复您的咨询和提供所请求的服务。',
      dataSharingTitle: '2. 信息共享',
      dataSharingText: 'Viva Rio Homes 不会出售、出租或与第三方共享您的个人信息。您的隐私是我们的首要任务。',
      dataSecurityTitle: '3. 数据安全',
      dataSecurityText: '我们采取合理的措施来保护我们收集的个人信息。然而，没有任何通过互联网传输或电子存储的方法是100%安全的。',
      cookiesTitle: '4. Cookies',
      cookiesText: '我们的网站可能会使用“cookies”来提升您的体验。您可以将浏览器设置为拒绝 cookies，但这可能会影响网站某些部分的功。',
      userRightsTitle: '5. 您的权利',
      userRightsText: '您有权随时访问、更正或要求删除您的个人信息。如果您有任何问题或需要帮助，请通过我们的表单联系我们。',
      changesTitle: '6. 本政策的变更',
      changesText: '本隐私政策可能会定期更新。我们建议您定期查看，以了解我们如何保护您的信息。',
      contactInfoTitle: '7. 联系方式',
      contactInfoText: '如果您对本隐私政策有任何疑问，请联系我们。',
    },
    ar: {
      title: 'سياسة الخصوصية',
      lastUpdated: 'آخر تحديث: 15 سبتمبر 2025',
      intro: 'خصوصيتك هي ذات أهمية قصوى لشركة Viva Rio Homes. تصف سياسة الخصوصية هذه كيفية جمعنا واستخدامنا وحمايتنا لمعلوماتك الشخصية عند استخدامك لموقعنا الإلكتروني.',
      dataCollectionTitle: '1. جمع المعلومات واستخدامها',
      dataCollectionText: 'نحن نجمع المعلومات التي تقدمها لنا مباشرة من خلال نموذج الاتصال، بما في ذلك اسمك وعنوان بريدك الإلكتروني. تُستخدم هذه المعلومات حصريًا للرد على استفساراتك وتقديم الخدمات المطلوبة.',
      dataSharingTitle: '2. مشاركة المعلومات',
      dataSharingText: 'لا تقوم Viva Rio Homes ببيع أو تأجير أو مشاركة معلوماتك الشخصية مع أطراف ثالثة. خصوصيتك هي أولويتنا.',
      dataSecurityTitle: '3. أمن البيانات',
      dataSecurityText: 'نتخذ إجراءات معقولة لحماية المعلومات الشخصية التي نجمعها. ومع ذلك، لا توجد طريقة نقل عبر الإنترنت أو تخزين إلكتروني آمنة بنسبة 100٪.',
      cookiesTitle: '4. ملفات تعريف الارتباط (Cookies)',
      cookiesText: 'قد يستخدم موقعنا الإلكتروني "ملفات تعريف الارتباط" لتحسين تجربتك. يمكنك تكوين متصفحك لرفض ملفات تعريف الارتباط، ولكن هذا قد يؤثر على وظائف بعض أجزاء الموقع.',
      userRightsTitle: '5. حقوقك',
      userRightsText: 'يحق لك الوصول إلى معلوماتك الشخصية أو تصحيحها أو طلب حذفها في أي وقت. إذا كان لديك أي أسئلة أو احتجت إلى مساعدة، يرجى الاتصال بنا من خلال نموذجنا.',
      changesTitle: '6. التغييرات على هذه السياسة',
      changesText: 'قد يتم تحديث سياسة الخصوصية هذه بشكل دوري. نوصيك بمراجعتها بانتظام للبقاء على اطلاع على كيفية حماية معلوماتك.',
      contactInfoTitle: '7. الاتصال',
      contactInfoText: 'إذا كان لديك أي أسئلة حول سياسة الخصوصية هذه، يرجى الاتصال بنا.',
    },
    de: {
      title: 'Datenschutzerklärung',
      lastUpdated: 'Zuletzt aktualisiert: 15. September 2025',
      intro: 'Ihre Privatsphäre ist uns bei Viva Rio Homes sehr wichtig. Diese Datenschutzerklärung beschreibt, wie wir Ihre persönlichen Daten erfassen, verwenden und schützen, wenn Sie unsere Website nutzen.',
      dataCollectionTitle: '1. Erfassung und Nutzung von Informationen',
      dataCollectionText: 'Wir erfassen die Informationen, die Sie uns direkt über das Kontaktformular zur Verfügung stellen, einschließlich Ihres Namens und Ihrer E-Mail-Adresse. Diese Informationen werden ausschließlich zur Beantwortung Ihrer Anfragen und zur Bereitstellung der angeforderten Dienste verwendet.',
      dataSharingTitle: '2. Weitergabe von Informationen',
      dataSharingText: 'Viva Rio Homes verkauft, vermietet oder gibt Ihre persönlichen Daten nicht an Dritte weiter. Ihre Privatsphäre hat bei uns Priorität.',
      dataSecurityTitle: '3. Datensicherheit',
      dataSecurityText: 'Wir ergreifen angemessene Maßnahmen, um die von uns erfassten persönlichen Daten zu schützen. Dennoch ist keine Methode der Datenübertragung über das Internet oder der elektronischen Speicherung 100% sicher.',
      cookiesTitle: '4. Cookies',
      cookiesText: 'Unsere Website kann "Cookies" verwenden, um Ihre Erfahrung zu verbessern. Sie können Ihren Browser so konfigurieren, dass er Cookies ablehnt, was jedoch die Funktionalität einiger Teile der Website beeinträchtigen kann.',
      userRightsTitle: '5. Ihre Rechte',
      userRightsText: 'Sie haben das Recht, jederzeit auf Ihre persönlichen Daten zuzugreifen, sie zu korrigieren oder deren Löschung zu beantragen. Wenn Sie Fragen haben oder Hilfe benötigen, kontaktieren Sie uns bitte über unser Formular.',
      changesTitle: '6. Änderungen an dieser Richtlinie',
      changesText: 'Diese Datenschutzerklärung kann regelmäßig aktualisiert werden. Wir empfehlen Ihnen, sie regelmäßig zu überprüfen, um darüber informiert zu bleiben, wie wir Ihre Daten schützen.',
      contactInfoTitle: '7. Kontakt',
      contactInfoText: 'Wenn Sie Fragen zu dieser Datenschutzerklärung haben, kontaktieren Sie uns bitte.',
    },
    it: {
      title: 'Informativa sulla Privacy',
      lastUpdated: 'Ultimo aggiornamento: 15 settembre 2025',
      intro: 'La tua privacy è di estrema importanza per Viva Rio Homes. Questa Informativa sulla Privacy descrive come raccogliamo, utilizziamo e proteggiamo le tue informazioni personali quando utilizzi il nostro sito web.',
      dataCollectionTitle: '1. Raccolta e Utilizzo delle Informazioni',
      dataCollectionText: 'Raccogliamo le informazioni che ci fornisci direttamente tramite il modulo di contatto, inclusi il tuo nome e l\'indirizzo email. Queste informazioni vengono utilizzate esclusivamente per rispondere alle tue richieste e fornire i servizi richiesti.',
      dataSharingTitle: '2. Condivisione delle Informazioni',
      dataSharingText: 'Viva Rio Homes non vende, affitta o condivide le tue informazioni personali con terze parti. La tua privacy è la nostra priorità.',
      dataSecurityTitle: '3. Sicurezza dei Dati',
      dataSecurityText: 'Adottiamo misure ragionevoli per proteggere le informazioni personali che raccogliamo. Tuttavia, nessun metodo di trasmissione via Internet o di archiviazione elettronica è sicuro al 100%.',
      cookiesTitle: '4. Cookie',
      cookiesText: 'Il nostro sito web può utilizzare i "cookie" per migliorare la tua esperienza. Puoi configurare il tuo browser per rifiutare i cookie, ma ciò potrebbe influire sulla funzionalità di alcune parti del sito.',
      userRightsTitle: '5. I Tuoi Diritti',
      userRightsText: 'Hai il diritto di accedere, correggere o richiedere la cancellazione delle tue informazioni personali in qualsiasi momento. Se hai domande o hai bisogno di assistenza, ti preghiamo di contattarci tramite il nostro modulo.',
      changesTitle: '6. Modifiche a questa Informativa',
      changesText: 'Questa Informativa sulla Privacy può essere aggiornata periodicamente. Ti consigliamo di rivederla regolarmente per rimanere informato su come stiamo proteggendo le tue informazioni.',
      contactInfoTitle: '7. Contatto',
      contactInfoText: 'Se hai domande su questa Informativa sulla Privacy, ti preghiamo di contattarci.',
    },
    fr: {
      title: 'Politique de Confidentialité',
      lastUpdated: 'Dernière mise à jour : 15 septembre 2025',
      intro: 'Votre vie privée est d\'une importance capitale pour Viva Rio Homes. Cette politique de confidentialité décrit comment nous collectons, utilisons et protégeons vos informations personnelles lorsque vous utilisez notre site web.',
      dataCollectionTitle: '1. Collecte et Utilisation des Informations',
      dataCollectionText: 'Nous collectons les informations que vous nous fournissez directement via le formulaire de contact, y compris votre nom et votre adresse e-mail. Ces informations sont utilisées exclusivement pour répondre à vos demandes et fournir les services demandés.',
      dataSharingTitle: '2. Partage des Informations',
      dataSharingText: 'Viva Rio Homes ne vend pas, ne loue pas et ne partage pas vos informations personnelles avec des tiers. Votre vie privée est notre priorité.',
      dataSecurityTitle: '3. Sécurité des Données',
      dataSecurityText: 'Nous prenons des mesures raisonnables pour protéger les informations personnelles que nous collectons. Cependant, aucune méthode de transmission sur Internet ou de stockage électronique n\'est sûre à 100 %.',
      cookiesTitle: '4. Cookies',
      cookiesText: 'Notre site web peut utiliser des "cookies" pour améliorer votre expérience. Vous pouvez configurer votre navigateur pour refuser les cookies, mais cela pourrait affecter la fonctionnalité de certaines parties du site.',
      userRightsTitle: '5. Vos Droits',
      userRightsText: 'Vous avez le droit d\'accéder à vos informations personnelles, de les corriger ou de demander leur suppression à tout moment. Si vous avez des questions ou si vous avez besoin d\'aide, veuillez nous contacter via notre formulaire.',
      changesTitle: '6. Modifications de cette Politique',
      changesText: 'Cette Politique de Confidentialité peut être mise à jour périodiquement. Nous vous recommandons de la consulter régulièrement pour rester informé sur la façon dont nous protégeons vos informations.',
      contactInfoTitle: '7. Contact',
      contactInfoText: 'Si vous avez des questions concernant cette Politique de Confidentialité, veuillez nous contacter.',
    },
  };

  const idiomaNavegador = typeof window !== 'undefined' ? navigator.language.slice(0, 2) : 'pt';

  useEffect(() => {
    if (traducciones[idiomaNavegador]) {
      setLanguage(idiomaNavegador);
    }
  }, []);

  const t = traducciones[language];

  return (
    <>
      <Head>
        <title>{t.title}</title>
      </Head>
      <div className="container mx-auto p-8 max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 text-center mb-6">
          {t.title}
        </h1>
        <p className="text-sm md:text-md text-gray-500 text-center mb-10">
          {t.lastUpdated}
        </p>
        <div className="bg-white rounded-lg shadow-xl p-8 mb-8">
          <p className="text-gray-600 leading-relaxed mb-6">{t.intro}</p>
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-700 mb-4">{t.dataCollectionTitle}</h2>
          <p className="text-gray-600 leading-relaxed mb-6">{t.dataCollectionText}</p>
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-700 mb-4">{t.dataSharingTitle}</h2>
          <p className="text-gray-600 leading-relaxed mb-6">{t.dataSharingText}</p>
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-700 mb-4">{t.dataSecurityTitle}</h2>
          <p className="text-gray-600 leading-relaxed mb-6">{t.dataSecurityText}</p>
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-700 mb-4">{t.cookiesTitle}</h2>
          <p className="text-gray-600 leading-relaxed mb-6">{t.cookiesText}</p>
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-700 mb-4">{t.userRightsTitle}</h2>
          <p className="text-gray-600 leading-relaxed mb-6">{t.userRightsText}</p>
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-700 mb-4">{t.changesTitle}</h2>
          <p className="text-gray-600 leading-relaxed mb-6">{t.changesText}</p>
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-700 mb-4">{t.contactInfoTitle}</h2>
          <p className="text-gray-600 leading-relaxed">{t.contactInfoText}</p>
        </div>
      </div>
    </>
  );
}