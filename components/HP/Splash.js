import React from 'react';
import PropTypes from 'prop-types';

import Image from 'next/image';

import styles from './splash.module.scss';

function Item({ className, uri, imgHasPriority }) {
  return (
    <div className={className}>
      <Image
        src={`https://res.cloudinary.com/dia4050i1/image/upload/v1491757981/surf/1000x751/${uri}.jpg`}
        layout="fill"
        objectFit="cover"
        objectPosition="center"
        alt="boh"
        priority={imgHasPriority}
      />
    </div>
  );
}
Item.propTypes = {
  className: PropTypes.string,
  uri: PropTypes.string,
  imgHasPriority: PropTypes.bool,
};
Item.defaultProps = {
  className: '',
  uri: '',
  imgHasPriority: false,
};

function Triplet({ cat, pos }) {
  const category = Object.keys(cat)[0];
  const catSlides = cat[category];
  let posClassName = styles['splash__triplet--main'];
  if (pos !== 1) {
    posClassName =
      pos === 2
        ? styles['splash__triplet--right']
        : styles['splash__triplet--left'];
  }
  const triCls = `${styles.splash__triplet} ${posClassName}`;
  return (
    <div className={triCls}>
      {catSlides.map((slide, n) => {
        const cls = `splash__triplet--${n === 0 ? 'big' : `reg${n}`}`;
        return (
          <Item
            key={`${category}${slide}`}
            className={styles[cls]}
            uri={`${category}${slide}`}
            imgHasPriority={pos === 1 && n === 0}
          />
        );
      })}
    </div>
  );
}
Triplet.propTypes = {
  cat: PropTypes.instanceOf(Object),
  pos: PropTypes.number,
};
Triplet.defaultProps = {
  cat: {},
  pos: 0,
};

export default function Splash({ slides }) {
  return (
    <div className={styles.splash}>
      <div className={styles.splash__slider}>
        {slides.map((cat, x) => (
          <Triplet key={`${cat}${x + 1}`} cat={cat} pos={x + 1} />
        ))}
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
