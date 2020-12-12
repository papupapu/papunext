import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

import Triplet from './Triplet';

import styles from './splash.module.scss';

export default function Splash({ slides }) {
  const slider = useRef(null);
  const [vw, setVW] = useState(null);
  const [pos, setPos] = useState(null);
  const [startX, setStartX] = useState(null);
  const [startY, setStartY] = useState(null);
  const [deltaX, setDeltaX] = useState(null);
  const [direction, setDirection] = useState(null);
  const [current, setCurrent] = useState(null);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const _vw = document.documentElement.clientWidth;
    const _isDesktop = _vw >= 950;

    let initialPos = 0;
    let initialCurrent = 0;
    let span = (_vw / 100) * 75;

    if (!_isDesktop) {
      initialPos = _vw * 3 * -1;
      initialCurrent = 3;
      span = _vw;
    }
    setPos(initialPos);
    setCurrent(initialCurrent);
    setVW(span);
    setIsDesktop(_isDesktop);
  }, []);

  // const gotoSlide = (n) => {
  //   const newCurrent = n;
  //   const coords = vw * newCurrent * -1;
  //   slider.current.style.transform = `translate(${coords}px,0)`;
  //   setPos(coords);
  //   setCurrent(newCurrent);
  // };

  const prevSlide = () => {
    const newCurrent = current - 1;
    const coords = vw * newCurrent * -1;
    slider.current.style.transform = `translate(${coords}px,0)`;
    setPos(coords);
    setCurrent(newCurrent);
  };

  const nextSlide = () => {
    const newCurrent = current + 1;
    const coords = vw * newCurrent * -1;
    slider.current.style.transform = `translate(${coords}px,0)`;
    setPos(coords);
    setCurrent(newCurrent);
  };

  const touchStart = (e) => {
    slider.current.classList.remove(styles.wTransition);
    const touches = e.touches[0];
    setStartX(touches.pageX);
    setStartY(touches.pageY);
  };

  const touchMove = (e) => {
    const touches = e.touches[0];
    const _deltaY = touches.pageY - startY;
    const _deltaX = touches.pageX - startX;
    if (Math.abs(_deltaY) > 5 && Math.abs(_deltaY) > Math.abs(_deltaX) / 2) {
      setDeltaX(0);
    } else {
      setDirection(_deltaX < 0 ? 'next' : 'prev');
      setDeltaX(_deltaX);
      const coords = deltaX + vw * current * -1;
      if (slider) {
        slider.current.style.transform = `translate(${coords}px,0)`;
      }
    }
  };

  const touchEnd = () => {
    if (!slider.current) return;
    slider.current.classList.add(styles.wTransition);

    if (Math.abs(deltaX) > vw / 4) {
      if (direction === 'next') {
        nextSlide();
      } else {
        prevSlide();
      }
    } else {
      slider.current.style.transform = `translate(${pos}px,0)`;
    }
    setStartX(0);
    setStartY(0);
    setDeltaX(0);
  };

  const style = pos ? { transform: `translate(${pos}px, 0px)` } : null;
  const prev =
    isDesktop && current > -1 ? (
      <button
        type="button"
        onClick={prevSlide}
        className={`${styles.splash__nav} ${styles['splash__nav--prev']}`}
      >
        prev
      </button>
    ) : null;
  const next =
    isDesktop && current < 1 ? (
      <button
        type="button"
        onClick={nextSlide}
        className={`${styles.splash__nav} ${styles['splash__nav--next']}`}
      >
        next
      </button>
    ) : null;
  return (
    <div className={styles.splash}>
      <div
        ref={slider}
        className={styles.splash__slider}
        style={style}
        onTouchStart={touchStart}
        onTouchMove={touchMove}
        onTouchEnd={touchEnd}
      >
        {slides.map((cat, x) => {
          return <Triplet key={`${cat}${x + 1}`} order={x + 1} cat={cat} />;
        })}
      </div>
      {prev}
      {next}
    </div>
  );
}
Splash.propTypes = {
  slides: PropTypes.instanceOf(Array),
};
Splash.defaultProps = {
  slides: [],
};
