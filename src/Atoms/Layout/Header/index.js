import React from 'react';

import Icon from '../../Utils/Icon';

import styles from './header.module.scss';

export default function Header() {
  return (
    <div className={`${styles.header} c-bg--p`}>
      <div className={`${styles.header__wrap} pl--m pr--m`}>
        <div className={styles.header__logo}>
          <Icon name="logo" className="c-txt--f1" />
        </div>
        <div className={styles.header__nav}>
          <a href="/" title="Primo link" className="tp-w--m c-txt--f2">
            Surf
          </a>
          <a href="/" title="Secondo link" className="tp-w--m c-txt--f2">
            Mountain
          </a>
          <a href="/" title="Terzo link" className="tp-w--m c-txt--f2">
            Comics
          </a>
          <a href="/" title="Terzo link" className="tp-w--m c-txt--f2">
            React
          </a>
        </div>
      </div>
    </div>
  );
}
