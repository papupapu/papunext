import React from 'react';

import Ticket from '../../Cards/Ticket';

import styles from './twocols.module.scss';

function TwoColumns() {
  return (
    <div className={`${styles.wrap} mb--m c-bg--p`}>
      <div className={styles.wrap__cols}>
        <div className={`${styles.wrap__cols__col1} c-bg--s`}>
          <h2 className={`${styles['wrap__cols--tit']} tp-s--xs c-txt--f1`}>
            High altitude: le ultime notizie
          </h2>
          <Ticket />
          <Ticket />
          <Ticket />
        </div>
        <div className={styles.wrap__cols__col2}>
          <h2 className={`${styles['wrap__cols--tit']} tp-s--xs c-txt--f1`}>
            Everest: 100 anni di esplorazioni
          </h2>
          <Ticket />
          <Ticket />
          <Ticket />
        </div>
      </div>
    </div>
  );
}
export default TwoColumns;
