import React from 'react';
import Head from 'next/head';
import Header from '../components/Header';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Guia Longevidade: Encontre Moradia para Idosos</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <div>
        <Header />
      </div>
    </div>
  );
}
