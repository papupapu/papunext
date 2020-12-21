import React from 'react';

import styles from './tk.module.scss';

function Ticket() {
  return (
    <div className={styles.card}>
      <div className={styles.card__cnt} />
      <div className={styles.card__holes}>
        <div
          className={`${styles['card__holes--hole']} ${styles['card__holes--left']}`}
        />
        <div
          className={`${styles['card__holes--hole']} ${styles['card__holes--right']}`}
        />
      </div>
      <div className={styles.card__foot} />
    </div>
  );
}
export default Ticket;
