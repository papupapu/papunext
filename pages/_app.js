import React from 'react';
import PropTypes from 'prop-types';

import '../styles/globals.scss';

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
MyApp.propTypes = {
  Component: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.object,
    PropTypes.string,
    PropTypes.node,
  ]),
  pageProps: PropTypes.instanceOf(Object),
};
MyApp.defaultProps = {
  Component: null,
  pageProps: {},
};
export default MyApp;
