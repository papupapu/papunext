import React from 'react';

import Head from 'next/head';

import Header from '../components/Header';
import Footer from '../components/Footer';
import Splash from '../components/HP/Splash';
import TwoColumns from '../components/HP/TwoColumns';

function contents(cat, secondSlot = null) {
  const add = !secondSlot ? 0 : 3;
  return [...Array(3).keys()].map((i, x) => ({
    title:
      'Quando qualcuno scrive qualcosa che valga la pena leggere... è bene leggerla!',
    description:
      'suca suca suca suca suca suca suca suca suca suca suca suca suca suca suca suca suca suca suca suca suca suca suca',
    img: `${cat}${x + add + 1}`,
  }));
}

const slides = [
  { s: contents('s') },
  { t: contents('t') },
  { s: contents('s', 1) },
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
        <TwoColumns />
      </div>
      <Footer />
    </div>
  );
}
