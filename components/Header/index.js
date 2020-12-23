import React from 'react';

import styles from './header.module.scss';

export default function Header() {
  return (
    <div className={`${styles.header} c-bg--w`}>
      <div className={styles.header__logo}>Logo</div>
      <div className={styles.header__nav}>
        <a href="/" title="Primo link" className="c-txt--f2">
          Primo link
        </a>
        <a href="/" title="Secondo link" className="c-txt--f2">
          Secondo link
        </a>
        <a href="/" title="Terzo link" className="c-txt--f2">
          Terzo link
        </a>
      </div>
    </div>
  );
}
