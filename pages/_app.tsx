import '../styles/globals.scss';
import React from 'react';
import Navbar from '../components/shared/Navbar';

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
      {/*<Footer />*/}
    </>
  );
}
