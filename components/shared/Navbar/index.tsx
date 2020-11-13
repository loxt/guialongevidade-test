import React from 'react';
import Link from 'next/link';
import styles from './styles.module.scss';

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <Link href='/'>
        <img src='/logo.webp' alt='Guia Longevidade' />
      </Link>
      <div className={styles.search}>
        <input placeholder='São Paulo e Rio de Janeiro apenas' />
        <span className='fa fa-search fa-2x' />
      </div>
      <div className={styles.menu}>
        <Link href='/'>Início</Link>
        <Link href='https://guialongevidade.com.br/blog'>Blog</Link>
      </div>
    </nav>
  );
}
