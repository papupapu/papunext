import React, { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';

import WatchScroll from '../../../Utils/WatchScroll';

import makeClassName from '../../../../utils/makeClassName';

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

const Picture = ({
  className,
  mqMap,
  title,
  img,
  toLoad,
  scrollInfos,
  loaded,
}) => {
  const domEl = useRef(null);
  useEffect(() => {
    if (toLoad && scrollInfos.coords !== null) {
      const _vh = document.documentElement.clientHeight;
      const el = domEl.current;
      const offsetTop = el.offsetTop + el.parentNode.offsetTop;
      const top = offsetTop - scrollInfos.coords < _vh;
      const bot = offsetTop + el.offsetHeight - scrollInfos.coords <= _vh;

      if (top || bot) {
        loaded(false);
      }
    }
  }, [scrollInfos.coords, toLoad]);

  if (!toLoad) {
    const sources = Object.keys(mqMap)
      .reverse()
      .map((mq) => (
        <>
          <source
            type="image/webp"
            media={`(min-width:${mq}px)`}
            srcSet={`${imgBase}${mqMap[mq]}${imgFolder}webp/${img}.webp`}
          />
          <source
            type="image/jpeg"
            media={`(min-width:${mq}px)`}
            srcSet={`${imgBase}${mqMap[mq]}${imgFolder}jpg/${img}.jpg`}
          />
        </>
      ));

    return (
      <picture className={className}>
        {sources}
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
    );
  }
  return <picture ref={domEl} className={className} />;
};
Picture.propTypes = {
  className: PropTypes.string,
  mqMap: PropTypes.instanceOf(Object),
  title: PropTypes.string,
  img: PropTypes.string,
  toLoad: PropTypes.bool,
  scrollInfos: PropTypes.instanceOf(Object),
  loaded: PropTypes.func,
};
Picture.defaultProps = {
  className: null,
  mqMap: {},
  title: null,
  img: null,
  toLoad: true,
  scrollInfos: { coords: null, dir: '' },
  loaded: () => {},
};

function Ticket({ title, author, desc, img, imgRatio }) {
  const [isLoaded, setIsLoaded] = useState(false);
  const updateIsLoaded = () => setIsLoaded(true);
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

  const mqImgMap = {
    'r4-3': {
      1680: 'w_336',
      1280: 'w_296',
      768: 'w_236',
    },
    'r16-9': {
      1680: 'w_780',
      1280: 'w_584',
      1024: 'w_542',
      768: 'w_404',
    },
  };

  return (
    <div className={`${styles.card} pt--m`}>
      <CardContent className="tp-a--c pr--m pl--m">
        <h1 className="tp-s--xl tp-w--m c-txt--f1">{title}</h1>
        <p className="tp-s--xs pt--m pb--m c-txt--f2">{`Un'articolo di ${author}`}</p>
        <WatchScroll stopWatching={isLoaded}>
          {(scrollInfos) => (
            <Picture
              className={imgCls}
              mqMap={imgRatio === '16:9' ? mqImgMap['r16-9'] : mqImgMap['r4-3']}
              title={title}
              img={img}
              toLoad={!isLoaded}
              scrollInfos={scrollInfos}
              loaded={updateIsLoaded}
            />
          )}
        </WatchScroll>
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
