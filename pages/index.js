import React from 'react';

import Head from 'next/head';

import Header from '../components/Header';
import Footer from '../components/Footer';
import Splash from '../components/HP/Splash';

import styles from '../styles/Home.module.scss';

function contents(cat) {
  return [...Array(3).keys()].map((i, x) => ({
    title:
      'Quando qualcuno scrive qualcosa che valga la pena leggere... è bene leggerla!',
    description:
      'suca suca suca suca suca suca suca suca suca suca suca suca suca suca suca suca suca suca suca suca suca suca suca',
    img: `${cat}${x + 1}`,
  }));
}

const slides = [
  { s: contents('s') },
  { t: contents('t') },
  { s: contents('s') },
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
