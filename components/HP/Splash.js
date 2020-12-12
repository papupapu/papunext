import React from 'react';
import PropTypes from 'prop-types';

import Image from 'next/image';

import styles from './splash.module.scss';

function Item({ className, uri }) {
  return (
    <div className={className}>
      <Image
        src={`https://res.cloudinary.com/dia4050i1/image/upload/v1491757981/surf/1000x751/${uri}.jpg`}
        layout="fill"
        objectFit="cover"
        objectPosition="center"
        alt="boh"
      />
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

function Triplet({ cat, className }) {
  const category = Object.keys(cat)[0];
  const catSlides = cat[category];
  const triCls = `${styles.splash__triplet}${className ? ` ${className}` : ''}`;
  return (
    <div className={triCls}>
      {catSlides.map((slide, n) => {
        const cls = `splash__triplet--${n === 0 ? 'big' : `reg${n}`}`;
        return (
          <Item
            key={`${category}${slide}`}
            className={styles[cls]}
            uri={`${category}${slide}`}
          />
        );
      })}
    </div>
  );
}
Triplet.propTypes = {
  cat: PropTypes.instanceOf(Object),
  className: PropTypes.string,
};
Triplet.defaultProps = {
  cat: {},
  className: '',
};

export default function Splash({ slides }) {
  return (
    <div className={styles.splash}>
      <div className={styles.splash__slider}>
        {slides.map((cat, x) => {
          let cls = styles['splash__triplet--main'];
          if (x !== 0) {
            cls =
              x === 1
                ? styles['splash__triplet--right']
                : styles['splash__triplet--left'];
          }
          return <Triplet key={`${cat}${x + 1}`} cat={cat} className={cls} />;
        })}
      </div>
    </div>
  );
}
Splash.propTypes = {
  slides: PropTypes.instanceOf(Array),
};
Splash.defaultProps = {
  slides: [],
};
