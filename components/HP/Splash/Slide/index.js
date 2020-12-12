import React from 'react';
import PropTypes from 'prop-types';

import styles from '../splash.module.scss';

// const imgBase = 'https://res.cloudinary.com/dia4050i1/image/upload/v1607775109/next';
const imgBase = '';

export default function Slide({ className, uri }) {
  return (
    <div className={className}>
      <picture className={styles.splash__triplet__pic}>
        <source
          type="image/webp"
          media="(min-width:950px)"
          srcSet={`${imgBase}/des/${uri}.webp`}
        />
        <source
          type="image/webp"
          media="(min-width:768px)"
          srcSet={`${imgBase}/tab/${uri}.webp`}
        />
        <source
          type="image/jpeg"
          media="(min-width:950px)"
          srcSet={`${imgBase}/des/${uri}.jpg`}
        />
        <source
          type="image/jpeg"
          media="(min-width:768px)"
          srcSet={`${imgBase}/tab/${uri}.jpg`}
        />
        <source type="image/webp" srcSet={`${imgBase}/mob/${uri}.webp`} />
        <img
          className={styles.splash__triplet__img}
          src={`${imgBase}/mob/${uri}.jpg`}
          width="414"
          height="628"
          alt=""
          loading="lazy"
        />
      </picture>
      <h1 className={styles.splash__triplet__tit}>
        Quando qualcuno scrive qualcosa che valga la pena leggere... è bene
        leggerla!
      </h1>
      <p className={styles.splash__triplet__desc}>
        suca suca suca suca suca suca suca suca suca suca suca suca suca suca
        suca suca suca suca suca suca suca suca suca
      </p>
    </div>
  );
}
Slide.propTypes = {
  className: PropTypes.string,
  uri: PropTypes.string,
};
Slide.defaultProps = {
  className: '',
  uri: '',
};
