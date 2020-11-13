import React, { useEffect, useState } from 'react';
import styles from './styles.module.scss';
import { IList } from '../../common/interfaces/IList.interface';
import { useRouter } from 'next/router';
import rj from '../../database/rio-de-janeiro.json';
import sp from '../../database/sao-paulo.json';

export default function Header() {
  const dataSp = JSON.parse(JSON.stringify(sp));
  const dataRj = JSON.parse(JSON.stringify(rj));
  const [list, setList] = useState<IList[]>([]);

  const [menuList, setMenuList] = useState<IList[]>(null);
  const [text, setText] = useState('');

  const [place, setPlace] = useState<IList>(null);

  useEffect(() => {
    setList(
      dataSp.pageProps.initialPlaces.concat(dataRj.pageProps.initialPlaces),
    );
  }, []);

  function getList(text: string) {
    if (text.length > 0) {
      const array = list.map((place) => {
        place.location = place.address.split(', ')[2];
        return place;
      });
      setMenuList(array);
    }
  }

  if (place) viewDetails(place);

  async function viewDetails(place: IList) {
    const router = useRouter();
    // await router.push({
    //   pathname: ``,
    // });
    await router.push(
      {
        pathname: `/details?address=${place.address}&name=${place.name}&location=${place.location}&rating=${place.rating}`,
      },
      '/details',
    );
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
            onChange={(e) => setText(e.target.value)}
            placeholder='São Paulo e Rio de Janeiro apenas'
          />
          <span onClick={() => getList(text)} className='fa fa-search fa-2x' />
        </div>
        {/* https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=CnRtAAAATLZNl354RwP_9UKbQ_5Psy40texXePv4oAlgP4qNEkdIrkyse7rPXYGd9D_Uj1rVsQdWT4oRz4QrYAJNpFX7rzqqMlZw2h2E2y5IKMUZ7ouD_SlcHxYq1yL4KbKUv3qtWgTK0A6QbGh87GB3sscrHRIQiG2RrmU_jF4tENr9wGS_YxoUSSDrYjWmrNfeEHSGSc3FyhNLlBU&key=AIzaSyAeEmKzkgtVZRQy5_9ZRD4cJCrT472ASYA*/}
      </div>
      {menuList && (
        <div className={styles.listContainer}>
          <div className={styles.page}>
            <h3>Página 1</h3>
            <div>
              <span className='fa fa-arrow-left fa-2x' />
              <span className='fa fa-arrow-right fa-2x' />
            </div>
          </div>
          {menuList
            .filter(
              (place) =>
                place.address.toLowerCase().includes(text.toLowerCase()) ||
                place.location.toLowerCase().includes(text.toLowerCase()) ||
                place.name.toLowerCase().includes(text.toLowerCase()),
            )
            .slice(0, 10)
            .map((place, i) => {
              return (
                <p onClick={() => setPlace(place)} key={place.id}>
                  {place.name}
                </p>
              );
            })}
        </div>
      )}
    </header>
  );
}
