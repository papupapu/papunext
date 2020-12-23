import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

import Triplet from './Triplet';

import styles from './splash.module.scss';

const disableScroll = () => {
  if (window) {
    document.body.classList.add('noscroll');
  }
};

const enableScroll = () => {
  if (window) {
    document.body.classList.remove('noscroll');
  }
};

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
    const _isDesktop = _vw >= 1024;

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
  //   slider.current.style.transform = `translate3d(${coords}px,0,0)`;
  //   setPos(coords);
  //   setCurrent(newCurrent);
  // };

  const prevSlide = () => {
    const newCurrent = current - 1;
    const coords = newCurrent === 0 ? 0 : vw * newCurrent * -1;
    const limit = isDesktop ? -1 : 0;
    if (newCurrent >= limit) {
      slider.current.style.transform = `translate3d(${coords}px,0, 0)`;
      setPos(coords);
      setCurrent(newCurrent);
    } else {
      slider.current.style.transform = `translate3d(${pos}px,0,0)`;
    }
  };

  const nextSlide = () => {
    const newCurrent = current + 1;
    const coords = vw * newCurrent * -1;
    if (newCurrent <= 8) {
      slider.current.style.transform = `translate3d(${coords}px,0,0)`;
      setPos(coords);
      setCurrent(newCurrent);
    } else {
      slider.current.style.transform = `translate3d(${pos}px,0,0)`;
    }
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
      disableScroll();
      setDirection(_deltaX < 0 ? 'next' : 'prev');
      setDeltaX(_deltaX);
      const coords = deltaX + vw * current * -1;
      if (slider) {
        slider.current.style.transform = `translate3d(${coords}px,0,0)`;
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
      slider.current.style.transform = `translate3d(${pos}px,0,0)`;
    }
    setTimeout(() => {
      setStartX(0);
      setStartY(0);
      setDeltaX(0);
    }, 155);
    enableScroll();
  };

  const prevSlideOnClick = () => current > -1 && prevSlide();
  const prev = (
    <button
      type="button"
      onClick={prevSlideOnClick}
      className={`${styles.splash__nav} ${styles['splash__nav--prev']}${
        current > -1 ? '' : ` ${styles['splash__nav--ghost']}`
      }`}
      aria-label="prev"
    />
  );
  const nextSlideOnClick = () => current + 1 < slides.length - 1 && nextSlide();
  const next = (
    <button
      type="button"
      onClick={nextSlideOnClick}
      className={`${styles.splash__nav} ${styles['splash__nav--next']}${
        current < 1 ? '' : ` ${styles['splash__nav--ghost']}`
      }`}
      aria-label="next"
    />
  );

  const style =
    pos !== null ? { transform: `translate3d(${pos}px,0,0)` } : null;

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
