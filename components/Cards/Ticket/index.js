import React from 'react';
import PropTypes from 'prop-types';

import makeClassName from '../../../utils/makeClassName';

import styles from './tk.module.scss';

const CardHoles = () => (
  <div className={styles.card__holes}>
    <div
      className={`${styles['card__holes--hole']} ${styles['card__holes--left']}`}
    />
    <div
      className={`${styles['card__holes--hole']} ${styles['card__holes--right']}`}
    />
  </div>
);

const CardContent = ({ className, children }) => {
  const cls = makeClassName([styles.card__cnt, className]);
  return <div className={cls}>{children}</div>;
};
CardContent.propTypes = {
  className: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.object,
    PropTypes.string,
    PropTypes.node,
  ]),
};
CardContent.defaultProps = {
  className: null,
  children: null,
};

function Ticket() {
  const t = `Tamara Lunger atterrata a Islamabad e pronta per il K2`;
  const p = `Un'articolo di Ciccio pasticcio`;
  const d = `Un'articolo di Ciccio pasticcio articolo di Ciccio pasticcio articolo di Ciccio pasticcio articolo di Ciccio pasticcio articolo di Ciccio pasticcio`;
  return (
    <div className={styles.card}>
      <CardContent className="tp-a--c pr--m pl--m">
        <h1 className="tp-s--xl tp-w--m">{t}</h1>
        <p className="tp-s--xs pt--m pb--m">{p}</p>
        <div />
      </CardContent>
      <CardHoles />
      <CardContent className="tp-w--s pr--m pl--m">{d}</CardContent>
    </div>
  );
}
export default Ticket;
