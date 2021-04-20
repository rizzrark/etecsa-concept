import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="es">
        <Head />
        <body className="bg-[#EFF1F7]">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
