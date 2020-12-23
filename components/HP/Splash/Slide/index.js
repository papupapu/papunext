import React from 'react';
import PropTypes from 'prop-types';

import makeClassName from '../../../../utils/makeClassName';

import styles from '../splash.module.scss';

const imgBase =
  'https://res.cloudinary.com/dia4050i1/image/upload/v1607806886/next';

export default function Slide({ className, contents }) {
  const { title, description, img } = contents;
  const tCls = makeClassName([
    styles.splash__triplet__tit,
    'pr--m',
    'pb--m',
    'pl--m',
    'c-txt--w',
  ]);
  const dCls = makeClassName([
    styles.splash__triplet__desc,
    'pr--m',
    'pb--m',
    'pl--m',
    'tp-s--m',
    'c-txt--w',
  ]);
  return (
    <div className={className}>
      <picture className={styles.splash__triplet__pic}>
        <source
          type="image/webp"
          media="(min-width:950px)"
          srcSet={`${imgBase}/des/webp/${img}.webp`}
        />
        <source
          type="image/webp"
          media="(min-width:768px)"
          srcSet={`${imgBase}/tab/webp/${img}.webp`}
        />
        <source
          type="image/jpeg"
          media="(min-width:950px)"
          srcSet={`${imgBase}/des/jpg/${img}.jpg`}
        />
        <source
          type="image/jpeg"
          media="(min-width:768px)"
          srcSet={`${imgBase}/tab/jpg/${img}.jpg`}
        />
        <source type="image/webp" srcSet={`${imgBase}/mob/webp/${img}.webp`} />
        <img
          className={styles.splash__triplet__img}
          src={`${imgBase}/mob/jpg/${img}.jpg`}
          width="414"
          height="628"
          alt={title}
          loading="lazy"
        />
      </picture>
      <h1 className={tCls}>{title}</h1>
      <p className={dCls}>{description}</p>
    </div>
  );
}
Slide.propTypes = {
  className: PropTypes.string,
  contents: PropTypes.instanceOf(Object),
};
Slide.defaultProps = {
  className: '',
  contents: {},
};
