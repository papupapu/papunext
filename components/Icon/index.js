import React from 'react';
import PropTypes from 'prop-types';

import icons from './icons';

function Icon({ name, className, width, height, style }) {
  const getIcon = () => {
    const SVGIcon = name && icons[name] ? icons[name] : null;
    return (
      <SVGIcon
        className={className}
        width={width}
        height={height}
        style={{ width, height, ...style }}
      />
    );
  };
  return getIcon();
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
