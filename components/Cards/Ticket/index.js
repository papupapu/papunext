import React from 'react';

import styles from './tk.module.scss';

function Ticket() {
  const t = `Tamara Lunger atterrata a Islamabad e pronta per il K2`;
  const p = `Un'articolo di Ciccio pasticcio`;
  const d = `Un'articolo di Ciccio pasticcio articolo di Ciccio pasticcio articolo di Ciccio pasticcio articolo di Ciccio pasticcio articolo di Ciccio pasticcio`;
  return (
    <div className={styles.card}>
      <div className={styles.card__cnt}>
        <h1>{t}</h1>
        <p>{p}</p>
        <div />
      </div>
      <div className={styles.card__holes}>
        <div
          className={`${styles['card__holes--hole']} ${styles['card__holes--left']}`}
        />
        <div
          className={`${styles['card__holes--hole']} ${styles['card__holes--right']}`}
        />
      </div>
      <div className={styles.card__foot} style={{ textAlign: 'left' }}>
        {d}
      </div>
    </div>
  );
}
export default Ticket;
