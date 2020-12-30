import React from 'react';

import Head from 'next/head';

import Page from '../src/Page';
import Splash from '../src/HP/Splash';
import TwoColumns from '../src/HP/TwoColumns';
import Slides from '../src/HP/Slides';

function topSliderContents(cat, secondSlot = null) {
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
  { s: topSliderContents('s') },
  { t: topSliderContents('t') },
  { s: topSliderContents('s', 1) },
];

const colsContents = [
  {
    title: 'High altitude: le ultime notizie',
    data: [
      {
        title: 'Tamara Lunger atterrata a Islamabad e pronta per il K2',
        author: 'Ciccio Pasticcio',
        desc:
          "L'altoatesina in totale silenzio è atterrata stamattina a Islamabad insieme ad un folto gruppo di altri alpinisti che parteciperanno all'evento dell'inverno",
        img: 'col1-1',
      },
      {
        title: 'Anche Nirmal al campo base del K2, domani si sale',
        author: 'Ciccio Pasticcio',
        desc:
          'Sono tanti i nomi forti in gioco, ma quello che viene oggi da pensare è che la stagione invernale al K2 sia in mano agli alpinisti nepalesi.',
        img: 'col1-2',
      },
      {
        title:
          'Tre giovani Sherpa realizzano la prima salita del difficile Luza Peak (5726 m)',
        author: 'Ciccio Pasticcio',
        desc:
          'Un trio under 30 composto da Lhakpa Gyaljen Sherpa, Pemba Sherpa e Urken Sherpa ha realizzato lo scorso giovedì 17 dicembre la prima salita del Luza Peak (5726 m)',
        img: 'col1-3',
      },
    ],
  },
  {
    title: 'Everest: 100 anni di esplorazioni',
    data: [
      {
        title: 'La leggenda di George Mallory',
        author: 'Ciccio Pasticcio',
        desc:
          '"Non è una punta, ma una massa prodigiosa. Il lungo braccio della cresta nord-ovest, con i suoi speroni secondari, sembra la cattedrale di Winchester dopo una nevicata". Scrive così George Mallory, l\'alpinista inglese nel 1921.',
        img: 'col2-1',
      },
      {
        title:
          'Il lato oscuro dell’Everest: le 8 cose più spaventose della scalata',
        author: 'Ciccio Pasticcio',
        desc:
          'Vento, crepacci e cadaveri: l’esploratore Matthew Dieumegard-Thornton ci rivela le sfide fisiche e mentali alla conquista della vetta più alta del mondo',
        img: 'col2-2',
      },
      {
        title: 'Il mito dell’Everest: breve storia della vetta più ambita',
        author: 'Ciccio Pasticcio',
        desc:
          'L’Everest è da oltre 150 anni una delle vette più famosa, e più ambita, al mondo. Da quando, nel 1854, la cima venne denominata con il nome di Peak XV, l’Everest è un mito e un desiderio di alpinisti e amanti della montagna.',
        img: 'col3-3',
      },
    ],
  },
];

export default function Home() {
  return (
    <Page>
      <div className="glob_container">
        <Head>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no"
          />
        </Head>
        <div className="glob_content">
          <Splash slides={slides} />
          <TwoColumns contents={colsContents} />
          <Slides />
        </div>
      </div>
    </Page>
  );
}
