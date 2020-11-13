import React, { useEffect, useState } from 'react';
import styles from './styles.module.scss';
import { IList } from '../../common/interfaces/IList.interface';

import rj from '../../database/rio-de-janeiro.json';
import sp from '../../database/sao-paulo.json';
import Select from '../Select';

export default function Header() {
  const dataSp = JSON.parse(JSON.stringify(sp));
  const dataRj = JSON.parse(JSON.stringify(rj));
  const [list, setList] = useState<IList[]>([]);
  const [menuList, setMenuList] = useState<IList>(null);
  let clicked = false;

  useEffect(() => {
    setList([
      {
        initialPlaces: dataSp.pageProps.initialPlaces,
        location: dataSp.pageProps.location,
      },
      {
        initialPlaces: dataRj.pageProps.initialPlaces,
        location: dataRj.pageProps.location,
      },
    ]);
  }, [clicked]);

  async function getList(text: string) {
    if (text != '') {
      list.map((l) => {
        if (
          l.initialPlaces.some((value) =>
            value.address.toLowerCase().includes(text.toLowerCase()),
          )
        ) {
          setMenuList(l);
        }
      });
    }
  }

  return (
    <header className={styles.header}>
      <div className={styles.wrapper}>
        <h1>Encontre moradia para idosos na sua região</h1>
        <p>
          Busque por casas de repouso, residenciais para idosos e clínicas
          geriátricas
        </p>

        <div className={styles.search}>
          <input
            onChange={(e) => getList(e.target.value)}
            placeholder='São Paulo, SP'
          />
          <span
            onClick={() => {
              console.log('1');
              clicked = !clicked;
              console.log(clicked);
            }}
            className='fa fa-search fa-2x'
          />
        </div>
      </div>
    </header>
  );
}
