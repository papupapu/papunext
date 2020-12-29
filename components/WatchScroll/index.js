import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const WatchScroll = ({ children, stopWatching }) => {
  const [scrollInfos, setScrollInfos] = useState({ coords: null, dir: '' });
  useEffect(() => {
    setScrollInfos({ coords: window.pageYOffset, dir: '' });
  }, []);
  useEffect(() => {
    const updateScrollCoords = () => {
      const coords = window.pageYOffset;
      let { dir } = scrollInfos;
      if (coords && coords !== scrollInfos.coords) {
        if (coords > scrollInfos.coords) {
          dir = 'down';
        } else {
          dir = 'up';
        }
      }
      setScrollInfos({
        coords,
        dir,
      });
    };
    window.addEventListener('scroll', updateScrollCoords);
    if (stopWatching) {
      window.removeEventListener('scroll', updateScrollCoords);
    }
    return () => {
      window.removeEventListener('scroll', updateScrollCoords);
    };
  }, [scrollInfos.coords, scrollInfos.dir, stopWatching]);
  return <>{children(scrollInfos)}</>;
};
WatchScroll.propTypes = {
  stopWatching: PropTypes.bool,
  children: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.object,
    PropTypes.string,
    PropTypes.node,
  ]),
};
WatchScroll.defaultProps = {
  stopWatching: false,
  children: null,
};
export default WatchScroll;
