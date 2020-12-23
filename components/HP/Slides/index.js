import React from 'react';

import styles from './slides.module.scss';

function Slides() {
  return (
    <div className={`${styles.slides} mr--m mb--m ml--m`}>
      <div className={styles.slides__cont}>
        <div className="c-bg--p" />
        <div className="c-bg--p" />
        <div className="c-bg--p" />
        <div className="c-bg--p" />
      </div>
    </div>
  );
}
export default Slides;
