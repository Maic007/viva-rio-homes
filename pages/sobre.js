import React, { useState, useEffect } from 'react';
import Head from 'next/head';

export default function Sobre() {
  const [language, setLanguage] = useState('pt'); // Idioma por defecto es portugués

  const traducciones = {
    pt: {
      title: 'Sobre a Viva Rio Homes',
      subtitle: 'Sua porta de entrada para o mercado imobiliário mais exclusivo do Rio de Janeiro.',
      missionTitle: 'Nossa Missão',
      missionText: 'Na **Viva Rio Homes**, nossa missão é conectar uma clientela seleta às propriedades mais cobiçadas nos bairros mais desejados do Rio de Janeiro. Temos orgulho de ser a ponte que une os sonhos de uma casa de luxo com a vibrante realidade desta cidade icônica. Nosso compromisso é oferecer uma experiência de busca e aquisição que não apenas seja eficiente, mas também transparente e completamente adaptada às suas necessidades.',
      specialtyTitle: 'Nossa Especialidade',
      specialtyText1: 'Somos especializados exclusivamente no mercado de **propriedades de alto padrão**, de apartamentos modernos de frente para o mar a majestosas coberturas com vistas panorâmicas. Nosso catálogo é meticulosamente selecionado para incluir apenas o mais exclusivo, com foco em áreas de prestígio como ',
      specialtyText2: 'Cada propriedade que representamos é um investimento de valor inigualável e uma oportunidade para viver um estilo de vida de luxo e exclusividade.',
      whyUsTitle: 'Por que nos escolher?',
      whyUsPoints: [
        'Conhecimento Local Especializado: Temos um profundo entendimento do mercado imobiliário carioca, o que nos permite identificar oportunidades únicas e oferecer aconselhamento estratégico.',
        'Serviço Personalizado e Multilíngue: Atendemos clientes internacionais e nos comunicamos fluentemente em espanhol, português, inglês, francês, e outros idiomas, garantindo que cada cliente se sinta à vontade e compreendido.',
        'Discrição e Profissionalismo: Compreendemos a natureza das transações de luxo e garantimos a máxima discrição e um serviço da mais alta seriedade em todos os momentos.'
      ],
      neighborhoods: 'Barra da Tijuca, Copacabana, Leblon e Ipanema'
    },
    es: {
      title: 'Sobre Viva Rio Homes',
      subtitle: 'Tu puerta de entrada al mercado inmobiliario más exclusivo de Río de Janeiro.',
      missionTitle: 'Nuestra Misión',
      missionText: 'En **Viva Rio Homes**, nuestra misión es conectar a una clientela selecta con las propiedades más codiciadas en los barrios más deseados de Río de Janeiro. Nos enorgullece ser el puente que une los sueños de un hogar de lujo con la vibrante realidad de esta icónica ciudad. Nuestro compromiso es brindar una experiencia de búsqueda y adquisición que no solo sea eficiente, sino también transparente y completamente adaptada a tus necesidades.',
      specialtyTitle: 'Nuestra Especialidad',
      specialtyText1: 'Nos especializamos exclusivamente en el mercado de **propiedades de alto nivel**, desde modernos apartamentos frente al mar hasta majestuosas coberturas con vistas panorámicas. Nuestro catálogo está meticulosamente curado para incluir solo lo más selecto, con un enfoque en zonas de prestigio como ',
      specialtyText2: 'Cada propiedad que representamos es una inversión de valor inigualable y una oportunidad para vivir un estilo de vida de lujo y exclusividad.',
      whyUsTitle: '¿Por qué elegirnos?',
      whyUsPoints: [
        'Conocimiento Experto Local: Contamos con un profundo entendimiento del mercado inmobiliario carioca, lo que nos permite identificar oportunidades únicas y ofrecer asesoramiento estratégico.',
        'Servicio Personalizado y Multilingüe: Atendemos a clientes internacionales y nos comunicamos con fluidez en español, portugués, inglés, francés y otros idiomas, asegurando que cada cliente se sienta cómodo y comprendido.',
        'Discreción y Profesionalismo: Entendemos la naturaleza de las transacciones de lujo y garantizamos la máxima discreción y un servicio de la más alta seriedad en todo momento.'
      ],
      neighborhoods: 'Barra da Tijuca, Copacabana, Leblon e Ipanema'
    },
    en: {
      title: 'About Viva Rio Homes',
      subtitle: 'Your gateway to the most exclusive real estate market in Rio de Janeiro.',
      missionTitle: 'Our Mission',
      missionText: 'At **Viva Rio Homes**, our mission is to connect a select clientele with the most coveted properties in Rio de Janeiro\'s most desirable neighborhoods. We are proud to be the bridge that unites the dreams of a luxury home with the vibrant reality of this iconic city. Our commitment is to provide a search and acquisition experience that is not only efficient, but also transparent and completely tailored to your needs.',
      specialtyTitle: 'Our Specialty',
      specialtyText1: 'We specialize exclusively in the **high-end property market**, from modern beachfront apartments to majestic penthouses with panoramic views. Our catalog is meticulously curated to include only the most select, with a focus on prestigious areas such as ',
      specialtyText2: 'Each property we represent is an investment of unparalleled value and an opportunity to live a lifestyle of luxury and exclusivity.',
      whyUsTitle: 'Why choose us?',
      whyUsPoints: [
        'Expert Local Knowledge: We have a deep understanding of the Rio de Janeiro real estate market, which allows us to identify unique opportunities and offer strategic advice.',
        'Personalized and Multilingual Service: We serve international clients and communicate fluently in Spanish, Portuguese, English, French, and other languages, ensuring that each client feels comfortable and understood.',
        'Discretion and Professionalism: We understand the nature of luxury transactions and guarantee the utmost discretion and a service of the highest seriousness at all times.'
      ],
      neighborhoods: 'Barra da Tijuca, Copacabana, Leblon, and Ipanema'
    },
    zh: {
      title: '关于 Viva Rio Homes',
      subtitle: '您进入里约热内卢最独特房地产市场的门户。',
      missionTitle: '我们的使命',
      missionText: '在 **Viva Rio Homes**，我们的使命是为精选客户提供里约热内卢最热门社区中最令人向往的房产。我们很自豪能够成为连接奢华住宅梦想与这座标志性城市充满活力的现实的桥梁。我们的承诺是提供高效、透明并完全根据您的需求量身定制的搜索和购买体验。',
      specialtyTitle: '我们的专长',
      specialtyText1: '我们专门从事**高端房地产市场**，从现代海滨公寓到享有全景的宏伟顶层公寓。我们的目录经过精心策划，只收录最精选的房产，重点关注以下等著名区域：',
      specialtyText2: '我们所代表的每一处房产都具有无与伦比的价值，是享受奢华和独特生活方式的机会。',
      whyUsTitle: '为什么选择我们？',
      whyUsPoints: [
        '专业的本地知识：我们对里约热内卢的房地产市场有深刻的理解，这使我们能够发现独特的机会并提供战略性建议。',
        '个性化和多语言服务：我们为国际客户提供服务，并能流利地使用西班牙语、葡萄牙语、英语、法语等多种语言进行沟通，确保每位客户都感到舒适和被理解。',
        '严谨和专业：我们理解豪华交易的性质，并始终保证最高的严谨性和最专业的服务。'
      ],
      neighborhoods: 'Barra da Tijuca、Copacabana、Leblon 和 Ipanema'
    },
    ar: {
      title: 'عن فيفا ريو هومز',
      subtitle: 'بوابتك إلى سوق العقارات الأكثر تميزًا في ريو دي جانيرو.',
      missionTitle: 'مهمتنا',
      missionText: 'في **فيفا ريو هومز**، مهمتنا هي ربط نخبة من العملاء بأكثر العقارات المرغوبة في أكثر أحياء ريو دي جانيرو تميزًا. نحن فخورون بأن نكون الجسر الذي يربط أحلام المنزل الفاخر بالواقع النابض بالحياة لهذه المدينة الأيقونية. التزامنا هو تقديم تجربة بحث وشراء ليست فعالة فحسب، بل شفافة ومصممة بالكامل لتلبية احتياجاتك.',
      specialtyTitle: 'تخصصنا',
      specialtyText1: 'نحن متخصصون حصريًا في **سوق العقارات الفاخرة**، من الشقق الحديثة المطلة على البحر إلى الشقق البنتهاوس الفخمة ذات الإطلالات البانورامية. يتم تنظيم كتالوجنا بدقة ليشمل فقط أكثر العقارات تميزًا، مع التركيز على المناطق المرموقة مثل ',
      specialtyText2: 'كل عقار نمثله هو استثمار ذو قيمة لا تضاهى وفرصة للعيش بأسلوب حياة فاخر ومميز.',
      whyUsTitle: 'لماذا تختارنا؟',
      whyUsPoints: [
        'معرفة محلية متخصصة: لدينا فهم عميق لسوق العقارات في ريو دي جانيرو، مما يمكننا من تحديد الفرص الفريدة وتقديم المشورة الاستراتيجية.',
        'خدمة شخصية ومتعددة اللغات: نحن نخدم العملاء الدوليين ونتواصل بطلاقة باللغات الإسبانية والبرتغالية والإنجليزية والفرنسية ولغات أخرى، مما يضمن شعور كل عميل بالراحة والفهم.',
        'السرية والاحترافية: نحن نتفهم طبيعة المعاملات الفاخرة ونضمن أقصى درجات السرية وخدمة بأعلى مستوى من الجدية في جميع الأوقات.'
      ],
      neighborhoods: 'بارا دا تيجوكا، كوباكابانا، ليبلون وإيبانيما'
    },
    de: {
      title: 'Über Viva Rio Homes',
      subtitle: 'Ihr Zugang zum exklusivsten Immobilienmarkt in Rio de Janeiro.',
      missionTitle: 'Unsere Mission',
      missionText: 'Bei **Viva Rio Homes** ist es unsere Mission, eine ausgewählte Kundschaft mit den begehrtesten Immobilien in den begehrtesten Vierteln von Rio de Janeiro zu verbinden. Wir sind stolz darauf, die Brücke zwischen den Träumen von einem Luxus-Zuhause und der pulsierenden Realität dieser ikonischen Stadt zu sein. Unser Engagement ist es, eine Such- und Erwerbserfahrung zu bieten, die nicht nur effizient, sondern auch transparent und vollständig auf Ihre Bedürfnisse zugeschnitten ist.',
      specialtyTitle: 'Unsere Spezialität',
      specialtyText1: 'Wir spezialisieren uns ausschließlich auf den **High-End-Immobilienmarkt**, von modernen Apartments am Meer bis hin zu majestätischen Penthäusern mit Panoramablick. Unser Katalog wird sorgfältig zusammengestellt, um nur das Beste zu enthalten, mit einem Fokus auf renommierte Gebiete wie ',
      specialtyText2: 'Jede von uns repräsentierte Immobilie ist eine Investition von unübertroffenem Wert und eine Gelegenheit, einen Lebensstil voller Luxus und Exklusivität zu führen.',
      whyUsTitle: 'Warum uns wählen?',
      whyUsPoints: [
        'Fachkundiges lokales Wissen: Wir verfügen über ein tiefes Verständnis des Immobilienmarktes in Rio de Janeiro, was uns ermöglicht, einzigartige Gelegenheiten zu identifizieren und strategische Beratung anzubieten.',
        'Personalisierter und mehrsprachiger Service: Wir betreuen internationale Kunden und kommunizieren fließend in Spanisch, Portugiesisch, Englisch, Französisch und anderen Sprachen, um sicherzustellen, dass sich jeder Kunde wohl und verstanden fühlt.',
        'Diskretion und Professionalität: Wir verstehen die Natur von Luxustransaktionen und garantieren jederzeit höchste Diskretion und einen Service von größter Seriosität.'
      ],
      neighborhoods: 'Barra da Tijuca, Copacabana, Leblon und Ipanema'
    },
    it: {
      title: 'Su Viva Rio Homes',
      subtitle: 'Il tuo accesso al mercato immobiliare più esclusivo di Rio de Janeiro.',
      missionTitle: 'La nostra Missione',
      missionText: 'In **Viva Rio Homes**, la nostra missione è connettere una clientela selezionata con le proprietà più ambite nei quartieri più desiderati di Rio de Janeiro. Siamo orgogliosi di essere il ponte che unisce i sogni di una casa di lusso con la vibrante realtà di questa città iconica. Il nostro impegno è fornire un\'esperienza di ricerca e acquisizione che non sia solo efficiente, ma anche trasparente e completamente adattata alle tue esigenze.',
      specialtyTitle: 'La nostra Specialità',
      specialtyText1: 'Siamo specializzati esclusivamente nel mercato delle **proprietà di alta gamma**, dai moderni appartamenti fronte mare ai maestosi attici con vista panoramica. Il nostro catalogo è meticolosamente curato per includere solo il meglio, con un focus su aree prestigiose come ',
      specialtyText2: 'Ogni proprietà che rappresentiamo è un investimento di valore ineguagliabile e un\'opportunità per vivere uno stile di vita di lusso ed esclusività.',
      whyUsTitle: 'Perché sceglierci?',
      whyUsPoints: [
        'Conoscenza Esperta Locale: Abbiamo una profonda comprensione del mercato immobiliare di Rio de Janeiro, che ci permette di identificare opportunità uniche e offrire consulenza strategica.',
        'Servizio Personalizzato e Multilingue: Serviamo clienti internazionali e comunichiamo fluentemente in spagnolo, portoghese, inglese, francese e altre lingue, garantendo che ogni cliente si senta a proprio agio e compreso.',
        'Discrezione e Professionalità: Comprendiamo la natura delle transazioni di lusso e garantiamo la massima discrezione e un servizio di altissima serietà in ogni momento.'
      ],
      neighborhoods: 'Barra da Tijuca, Copacabana, Leblon e Ipanema'
    },
    fr: {
      title: 'À propos de Viva Rio Homes',
      subtitle: 'Votre passerelle vers le marché immobilier le plus exclusif de Rio de Janeiro.',
      missionTitle: 'Notre Mission',
      missionText: 'Chez **Viva Rio Homes**, notre mission est de connecter une clientèle sélectionnée aux propriétés les plus convoitées dans les quartiers les plus recherchés de Rio de Janeiro. Nous sommes fiers d\'être le pont qui unit les rêves d\'une maison de luxe à la réalité vibrante de cette ville emblématique. Notre engagement est de fournir une expérience de recherche et d\'acquisition qui est non seulement efficace, mais aussi transparente et entièrement adaptée à vos besoins.',
      specialtyTitle: 'Notre Spécialité',
      specialtyText1: 'Nous sommes spécialisés exclusivement dans le **marché immobilier haut de gamme**, des appartements modernes en bord de mer aux majestueux penthouses avec vue panoramique. Notre catalogue est méticuleusement organisé pour n\'inclure que le meilleur, avec un accent sur les zones prestigieuses telles que ',
      specialtyText2: 'Chaque propriété que nous représentons est un investissement d\'une valeur inégalée et une opportunité de vivre un style de vie de luxe et d\'exclusivité.',
      whyUsTitle: 'Pourquoi nous choisir?',
      whyUsPoints: [
        'Connaissance Locale Expertise: Nous avons une compréhension approfondie du marché immobilier de Rio de Janeiro, ce qui nous permet d\'identifier des opportunités uniques et d\'offrir des conseils stratégiques.',
        'Service Personnalisé et Multilingue: Nous servons des clients internationaux et communiquons couramment en espagnol, portugais, anglais, français et autres langues, garantissant que chaque client se sente à l\'aise et compris.',
        'Discrétion et Professionnalisme: Nous comprenons la nature des transactions de luxe et garantissons la plus grande discrétion et un service du plus haut sérieux à tout moment.'
      ],
      neighborhoods: 'Barra da Tijuca, Copacabana, Leblon et Ipanema'
    }
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
        <p className="text-xl text-gray-600 text-center mb-10">
          {t.subtitle}
        </p>
        
        <div className="bg-white rounded-lg shadow-xl p-8 mb-8">
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-700 mb-4">{t.missionTitle}</h2>
          <p className="text-gray-600 leading-relaxed" dangerouslySetInnerHTML={{ __html: t.missionText }} />
        </div>

        <div className="bg-white rounded-lg shadow-xl p-8 mb-8">
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-700 mb-4">{t.specialtyTitle}</h2>
          <p className="text-gray-600 leading-relaxed">
            {t.specialtyText1}
            <strong className="text-gray-800">{t.neighborhoods}</strong>.
          </p>
          <p className="text-gray-600 leading-relaxed mt-4">
            {t.specialtyText2}
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-xl p-8">
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-700 mb-4">{t.whyUsTitle}</h2>
          <ul className="list-disc list-inside text-gray-600 space-y-2">
            {t.whyUsPoints.map((point, index) => (
              <li key={index} dangerouslySetInnerHTML={{ __html: point }} />
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}