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

function Ticket({ title, author, desc, img, imgRatio }) {
  const pCls = makeClassName([
    styles['card__cnt--p'],
    'tp-w--s',
    'pr--m',
    'pl--m',
    'c-txt--f1',
  ]);
  const imgCls = makeClassName([
    'c-bg--p',
    imgRatio === '16:9' && styles['r16-9'],
  ]);
  return (
    <div className={`${styles.card} pt--m`}>
      <CardContent className="tp-a--c pr--m pl--m">
        <h1 className="tp-s--xl tp-w--m c-txt--f1">{title}</h1>
        <p className="tp-s--xs pt--m pb--m c-txt--f2">{`Un'articolo di ${author}`}</p>
        <div className={imgCls}>{img}</div>
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
