import React from 'react';
import PropTypes from 'prop-types';

import Header from '../Atoms/Layout/Header';
import Footer from '../Atoms/Layout/Footer';

function Page({ children }) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
export default Page;
Page.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.object,
    PropTypes.string,
    PropTypes.node,
  ]),
};
Page.defaultProps = {
  children: null,
};
