import "../styles/globals.css";

import { Layout, Loading } from "../components";
import Head from "next/head";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence } from "framer-motion";

function MyApp({ Component, pageProps }) {
  const [showChild, setShowChild] = useState(false);
  const audioEl = useRef(null);

  useEffect(() => {
    setShowChild(true);
  }, []);

  if (!showChild) {
    return null;
  }

  if (typeof window === "undefined") {
    return <></>;
  } else {
    return (
      <>
        <Head>
          <title>Wedding Of Asep & Nia</title>
          <meta charSet="UTF-8" />
          <meta name="description" content="Wedding Asep & Nia" />
          <meta
            name="keywords"
            content="Undangan Digital, Web Undangan Digital, Wedding"
          />
          <meta name="author" content="Ricky Zatnika" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
        </Head>
        <AnimatePresence mode="wait">
          <Layout>
            <Loading />
            <Component {...pageProps} />
          </Layout>
        </AnimatePresence>
      </>
    );
  }
}

export default MyApp;
