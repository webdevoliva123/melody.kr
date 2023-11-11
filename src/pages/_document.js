import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en" id='root_html'>
      <Head>
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@9/swiper-bundle.min.css" />
      </Head>
      <body className='bg-primary md:p-10 p-5 pb-0'>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
