import React from 'react';

import Header from '../components/Header';
import Footer from '../components/Footer';

import styles from '../styles/Home.module.scss';

function Item() {
  return (
    <div className={styles['splash__triplet--itm']}>
      <picture className={styles.splash__pic}>
        <source
          media="(min-width:768px)"
          srcSet="https://res.cloudinary.com/dia4050i1/image/upload/v1491757981/surf/1000x751/teahupoo2.jpg"
        />
        <img
          src="https://res.cloudinary.com/dia4050i1/image/upload/v1491758045/surf/345X259/teahupoo2.jpg"
          width="345"
          height="259"
          alt=""
        />
      </picture>
    </div>
  );
} 

function Triplet() {
  return(
    <div className={styles.splash__triplet}>
      <div className={styles['splash__triplet--big']}>
        <Item />
      </div>
      <div className={styles['splash__triplet--reg']}>
        <Item />
        <Item />
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <div className="glob_container">
      <Header />
      <div className="glob_content">
        <div className={styles.splash}>
          <div className={styles.splash__slider}>
            <Triplet />
            <Triplet />
            <Triplet />
          </div>
        </div>
        <div className={styles.list}>
          <div className={styles.list__card}>ya</div>
          <div className={styles.list__card}>ya</div>
          <div className={styles.list__card}>ya</div>
          <div className={styles.list__card}>ya</div>
          <div className={styles.list__card}>ya</div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
