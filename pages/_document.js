import { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'

export default function Document() {

  return (
    <Html lang="en">
      <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com"></link>
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin></link>
          <link href="https://fonts.googleapis.com/css2?family=Gowun+Dodum&family=Gugi&family=Noto+Sans+KR:wght@100;300;400;500;700;900&family=Pacifico&family=Sunflower:wght@300;500;700&display=swap" rel="stylesheet"></link> 
          <link href="https://fonts.googleapis.com/css2?family=Nanum+Gothic:wght@400;700;800&display=swap" rel="stylesheet"></link>
          <Script src="../utils/preventDrag.js" />
      </Head>
      <body onContextMenu={`return false`} onSelect={`return false`} onDragStart={`return false`} onKeyDown={`return false`}>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
