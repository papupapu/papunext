import React from 'react';

import Head from 'next/head';

import Header from '../components/Header';
import Footer from '../components/Footer';

import Splash from '../components/HP/Splash';

import styles from '../styles/Home.module.scss';

const slides = [
  { surf: [1, 2, 3] },
  { teahupoo: [1, 2, 3] },
  { surf: [4, 5, 6] },
];

export default function Home() {
  return (
    <div className="glob_container">
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
      </Head>
      <Header />
      <div className="glob_content">
        <Splash slides={slides} />
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
