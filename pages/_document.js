import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="pt">
      <Head>
        {/* SEO Básico */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta charSet="utf-8" />
        <meta name="description" content="Imóveis incríveis em Rio de Janeiro – viva o seu paraíso com Viva Rio Homes." />
        <meta name="keywords" content="imóveis, Rio de Janeiro, apartamentos, Barra da Tijuca, imóveis à venda, condomínio, Viva Rio Homes" />
        <meta name="author" content="Viva Rio Homes" />

        {/* Open Graph (para WhatsApp, Instagram, Facebook) */}
        <meta property="og:title" content="Viva Rio Homes - Seu Paraíso no Rio" />
        <meta property="og:description" content="Descubra apartamentos incríveis nos melhores bairros do Rio. Segurança, lazer e qualidade de vida." />
        <meta property="og:image" content="/capa-site.jpg" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://vivariohomes.com.br" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Viva Rio Homes - Imóveis no Rio de Janeiro" />
        <meta name="twitter:description" content="Acesse agora e encontre o imóvel ideal para você no Rio!" />
        <meta name="twitter:image" content="/capa-site.jpg" />

        {/* Ícone do site (favicon) */}
        <link rel="icon" href="/favicon.ico" />

        {/* 👇 Código de Google Analytics (AGREGADO) */}
        <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=TU_ID_DE_MEDICION_AQUI`}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());

              gtag('config', 'TU_ID_DE_MEDICION_AQUI');
            `,
          }}
        />
        {/* 👆 FIN de código de Google Analytics */}
      </Head>
      <body className="bg-black text-white">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
