import React from 'react';
import PropTypes from 'prop-types';

import makeClassName from '../../../utils/makeClassName';

import styles from './tk.module.scss';

const CardHoles = () => (
  <div className={`${styles.card__holes} c-bg--w`}>
    <div
      className={`${styles['card__holes--hole']} ${styles['card__holes--left']}`}
    />
    <div
      className={`${styles['card__holes--hole']} ${styles['card__holes--right']}`}
    />
  </div>
);

const CardContent = ({ className, children, tag }) => {
  const cls = makeClassName([styles.card__cnt, className, 'c-bg--w']);
  const CTag = tag || 'div';
  return <CTag className={cls}>{children}</CTag>;
};
CardContent.propTypes = {
  className: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.object,
    PropTypes.string,
    PropTypes.node,
  ]),
  tag: PropTypes.string,
};
CardContent.defaultProps = {
  className: null,
  children: null,
  tag: null,
};

const imgBase = 'https://res.cloudinary.com/dia4050i1/image/upload/';
const imgFolder = '/v1607806886/next/des/';

function Ticket({ title, author, desc, img, imgRatio }) {
  const pCls = makeClassName([
    styles['card__cnt--p'],
    'tp-w--s',
    'pr--m',
    'pl--m',
    'c-txt--f1',
  ]);
  const imgCls = makeClassName([
    styles['card__cnt--pic'],
    'c-bg--p',
    imgRatio === '16:9' && styles['card__cnt--pic--r16-9'],
  ]);
  return (
    <div className={`${styles.card} pt--m`}>
      <CardContent className="tp-a--c pr--m pl--m">
        <h1 className="tp-s--xl tp-w--m c-txt--f1">{title}</h1>
        <p className="tp-s--xs pt--m pb--m c-txt--f2">{`Un'articolo di ${author}`}</p>
        <picture className={imgCls}>
          <source
            type="image/webp"
            media="(min-width:1680px)"
            srcSet={`${imgBase}w_336${imgFolder}webp/${img}.webp`}
          />
          <source
            type="image/jpeg"
            media="(min-width:1680px)"
            srcSet={`${imgBase}w_336${imgFolder}jpg/${img}.jpg`}
          />
          <source
            type="image/webp"
            media="(min-width:1280px)"
            srcSet={`${imgBase}w_296${imgFolder}webp/${img}.webp`}
          />
          <source
            type="image/jpeg"
            media="(min-width:1280px)"
            srcSet={`${imgBase}w_296${imgFolder}jpg/${img}.jpg`}
          />
          <source
            type="image/webp"
            media="(min-width:768px)"
            srcSet={`${imgBase}w_236${imgFolder}webp/${img}.webp`}
          />
          <source
            type="image/jpeg"
            media="(min-width:768px)"
            srcSet={`${imgBase}w_236${imgFolder}jpg/${img}.jpg`}
          />
          <source
            type="image/webp"
            srcSet={`${imgBase}w_350${imgFolder}webp/${img}.webp`}
          />
          <img
            className={styles['card__cnt--img']}
            src={`${imgBase}w_350${imgFolder}jpg/${img}.jpg`}
            width="350"
            height="262"
            alt={title}
            loading="lazy"
          />
        </picture>
      </CardContent>
      <CardHoles />
      <CardContent tag="p" className={pCls}>
        {desc}
      </CardContent>
    </div>
  );
}
export default Ticket;
Ticket.propTypes = {
  title: PropTypes.string,
  author: PropTypes.string,
  desc: PropTypes.string,
  img: PropTypes.string,
  imgRatio: PropTypes.string,
};
Ticket.defaultProps = {
  title: null,
  author: null,
  desc: null,
  img: null,
  imgRatio: '4:3',
};
