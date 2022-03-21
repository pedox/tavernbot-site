import Head from "next/head";
import Script from "next/script";
import { Fragment } from "react";
import "tailwindcss/tailwind.css";

function MyApp({ Component, pageProps }) {
  return (
    <Fragment>
      <Head>
        <title>The TavernBot - Genshin Impact utility bot for your guild</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="google-site-verification"
          content="vALsLFEOwX6FtK0O9vFw47D6veks59a1MbElobMWU9s"
        />
      </Head>
      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=UA-215068175-1"
      />
      <Script>
        {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());

gtag('config', 'UA-215068175-1');`}
      </Script>
      <Component {...pageProps} />
    </Fragment>
  );
}

export default MyApp;
