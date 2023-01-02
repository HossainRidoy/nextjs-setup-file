import { Html, Head, Main, NextScript } from "next/document";
import Footer from "../components/layout/footer";
import Header from "../components/layout/header";

export default function Document() {
  return (
    <Html>
      <Head />
      <body>
        <Header />
        <Main />
        <NextScript />
        <Footer />
      </body>
    </Html>
  );
}
