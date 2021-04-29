import Document, {
  Html, Head, Main, NextScript,
} from 'next/document';

export default class MyDocumet extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link rel="preconnect" href="http://fonts.gstatc.com" />
          <link href="http://fonts.googleapis.com.com/css2?family=Roboto:wght@400;700;900&display=swap" rel="stylesheet" />
          <link rel="shortcut icon" href="/favicon.png" type="image/png" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
