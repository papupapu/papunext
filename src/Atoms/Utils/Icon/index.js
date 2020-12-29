import React from 'react';
import PropTypes from 'prop-types';

import icons from './icons';

import makeClassName from '../../../../utils/makeClassName';

import styles from './icon.module.scss';

function Icon({ name, className, width, height, style }) {
  const SVGIcon = name && icons[name] ? icons[name] : null;
  return SVGIcon ? (
    <SVGIcon
      className={makeClassName([styles.icon, className])}
      width={width}
      height={height}
      style={{ width, height, ...style }}
    />
  ) : null;
}
export default Icon;

Icon.propTypes = {
  name: PropTypes.string,
  className: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number,
  style: PropTypes.instanceOf(Object),
};

Icon.defaultProps = {
  name: null,
  className: null,
  width: null,
  height: null,
  style: {},
};
