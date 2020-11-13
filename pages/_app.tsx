import '../styles/globals.scss';
import React from 'react';

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      {/*<Header />*/}
      <Component {...pageProps} />
      {/*<Footer />*/}
    </>
  );
}
