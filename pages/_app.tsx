import Head from "next/head";
import Script from "next/script";
import { Fragment } from "react";
import "tailwindcss/tailwind.css";

function MyApp({ Component, pageProps }) {
  return (
    <Fragment>
      <Head>
        <title>Let the world forget</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="google-site-verification"
          content="vALsLFEOwX6FtK0O9vFw47D6veks59a1MbElobMWU9s"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin=''/>
        <link href="https://fonts.googleapis.com/css2?family=Lora:wght@400;700&display=swap" rel="stylesheet"></link>
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
