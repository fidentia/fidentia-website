import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@100;300;400;500;600;700&display=swap" rel="stylesheet" />        
        <meta name="description" content="Soluções completas em seguros para pesquisas clínicas. Oferecemos uma suíte completa de soluções e serviços com tudo o que você precisa sobre seguro para o mundo das pesquisas clínicas." />
        <meta property="og:title" content="Home" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.fidentia.com.br/" />
        <meta property="og:description" content="Soluções completas em seguros para pesquisas clínicas" />
        <meta property="og:site_name" content="Fidentia" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
