import { Html, Head, Main, NextScript } from 'next/document'
import Analytics from '../components/Analytics'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@100;300;400;500;600;700&display=swap" rel="stylesheet" /> 
        <link rel="icon" type="image/jpeg" sizes="32x32" href="/images/favicon.jpeg"/>
      </Head>
      <body>
        <Main />
        <NextScript />
        <Analytics />
      </body>
    </Html>
  )
}
