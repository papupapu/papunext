import React, { memo } from 'react';
import PropTypes from 'prop-types';

import Slide from '../Slide';

import styles from '../splash.module.scss';

function Triplet({ cat, order }) {
  const category = Object.keys(cat)[0];
  const catSlides = cat[category];
  let orderCls = styles['splash__triplet--main'];
  if (order !== 1) {
    orderCls =
      order === 2
        ? styles['splash__triplet--right']
        : styles['splash__triplet--left'];
  }
  const tripletCls = `${styles.splash__triplet} ${orderCls}`;
  return (
    <div className={tripletCls}>
      {catSlides.map((slide, n) => {
        const itemPos = n === 0 ? 'big' : `reg${n}`;
        return (
          <Slide
            key={`${category}${slide}`}
            className={styles[`splash__triplet--${itemPos}`]}
            uri={`${category}${slide}`}
          />
        );
      })}
    </div>
  );
}
Triplet.propTypes = {
  cat: PropTypes.instanceOf(Object),
  order: PropTypes.number,
};
Triplet.defaultProps = {
  cat: {},
  order: 0,
};

export default memo(Triplet);
