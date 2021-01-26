import React, { memo } from 'react';
import PropTypes from 'prop-types';

import Slide from '../Slide';

import styles from '../splash.module.scss';

function Triplet({ cat, order }) {
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
      {cat.articles.map((slide, n) => {
        const itemPos = n === 0 ? 'big' : 'reg';
        return (
          <Slide
            key={`${cat.title}${n + 1}`}
            contents={slide}
            custom={cat.title === 'Surf spots review' && n === 0}
            className={`${styles[`splash__triplet--slide`]} ${
              styles[`splash__triplet--${itemPos}`]
            }`}
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
