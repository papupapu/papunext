import React from 'react';
import PropTypes from 'prop-types';

import Head from 'next/head';

import Header from '../components/Header';
import Footer from '../components/Footer';

import styles from '../styles/Home.module.scss';

function Item({ className, uri }) {
  return (
    <div className={className}>
      <picture className={styles.splash__pic}>
        <source
          media="(min-width:768px)"
          srcSet={`https://res.cloudinary.com/dia4050i1/image/upload/v1491757981/surf/1000x751/${uri}.jpg`}
        />
        <img
          src={`https://res.cloudinary.com/dia4050i1/image/upload/v1491758045/surf/345X259/${uri}.jpg`}
          width="345"
          height="259"
          alt=""
          load="lazy"
        />
      </picture>
    </div>
  );
}
Item.propTypes = {
  className: PropTypes.string,
  uri: PropTypes.string,
};
Item.defaultProps = {
  className: '',
  uri: '',
};

const slides = [
  { teahupoo: [1, 2, 3] },
  { surf: [1, 2, 3] },
  { surf: [4, 5, 6] },
];

function Triplet({ cat }) {
  const category = Object.keys(cat)[0];
  const catSlides = cat[category];
  return (
    <div className={styles.splash__triplet}>
      {catSlides.map((slide, n) => {
        const className = `splash__triplet--${n === 0 ? 'big' : `reg${n}`}`;
        return (
          <Item
            key={`${category}${slide}`}
            className={styles[className]}
            uri={`${category}${slide}`}
          />
        );
      })}
    </div>
  );
}
Triplet.propTypes = {
  cat: PropTypes.instanceOf(Object),
};
Triplet.defaultProps = {
  cat: {},
};

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
        <div className={styles.splash}>
          <div className={styles.splash__slider}>
            {slides.map((cat) => {
              return <Triplet cat={cat} />;
            })}
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
