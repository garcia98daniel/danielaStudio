import React from "react";
import Head from "next/head";
import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children, pagina, blogs }) => {
  return (
    <div>
      <Head>
        <title>Daniela Adarraga Studio - Maquillaje para novia - Boda - Colombia - {pagina}</title>
        <meta name="description" content="Sitio Web de venta de guitarras" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Covered+By+Your+Grace&family=Lato:wght@400;700;900&family=Staatliches&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Header blogs={blogs} />
      {children}
      <Footer />
    </div>
  );
};

Layout.defaultProps = {
  guitarra: null,
};

export default Layout;
