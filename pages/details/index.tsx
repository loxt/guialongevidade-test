import React, { useEffect, useState } from 'react';
import styles from './styles.module.scss';
import Router from 'next/router';
import { IList } from '../../common/interfaces/IList.interface';
import dynamic from 'next/dynamic';
import Link from 'next/link';

export default function Details() {
  const [data, setData] = useState<IList>(null);

  useEffect(() => {
    const data = Router.query as unknown;
    if (Router.query) {
      setData(data as IList);
    }
  }, []);

  if (!data)
    return (
      <div className={styles.container}>Erro 404, volte a página inicial.</div>
    );
  return (
    <>
      <div className={styles.wrapper}>
        <Map latitude={-23.551749} longitude={-46.651223} />
        <div className={styles.container}>
          <h1>{data.name ? data.name : 'Sem nome.'}</h1>
          <div className={styles.location}>
            <span className={'fa fa-map-marker fa-2x'} />
            <span>{data.location ? data.location : 'Sem endereço.'}</span>
          </div>
          <div className={styles.itemContainer}>
            <div className={styles.star}>
              <p>Relevância</p>
              {Array.apply(null, { length: data.rating ? data.rating : 1 }).map(
                (e, i) => (
                  <span className='fa fa-star fa-2x' key={i} />
                ),
              )}
            </div>
            <div className={styles.address}>
              <p>Endereço</p>
              <span>{data.address ? data.address : 'Sem endereço.'}</span>
            </div>
          </div>
          <Link href={`/`}>Ver no google maps</Link>
        </div>
      </div>
    </>
  );
}

const Map = dynamic(
  () => import('../../components/Map'), // replace '@components/map' with your component's location
  { ssr: false }, // This line is important. It's what prevents server-side render
);
