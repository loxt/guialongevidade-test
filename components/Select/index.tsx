import React, { useState } from 'react';
import styles from './styles.module.scss';
import { IList } from '../../common/interfaces/IList.interface';

export default function Select(props) {
  const [menuList] = useState<IList[]>(props.data);
  return <div className={styles.container}>a</div>;
}
