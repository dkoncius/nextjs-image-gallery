import Document, { Head, Html, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="icon" href="/favicon.ico" />
          <meta
            name="description"
            content="Perfect Gallery Page."
          />
          <meta property="og:site_name" content="nextjsconf-pics.vercel.app" />
          <meta
            property="og:description"
            content="Perfect Gallery Page."
          />
          <meta property="og:title" content="Perfect Gallery Page." />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="Perfect Gallery Page." />
          <meta
            name="twitter:description"
            content="Perfect Gallery Page."
          />
        </Head>
        <body className="bg-black antialiased">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
