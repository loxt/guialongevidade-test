import React from 'react';
import styles from './styles.module.scss';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.wrapper}>
        <h1>Encontre moradia para idosos na sua região</h1>
        <p>Busque por casas de repouso, residenciais para idosos e clínicas geriátricas</p>

        <div className={styles.search}>
          <input placeholder="Digite sua localização..." />
          <span className="fa fa-search fa-2x"/>
        </div>
      </div>
    </header>
  );
}

