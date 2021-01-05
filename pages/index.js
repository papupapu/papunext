import React from 'react';
import PropTypes from 'prop-types';
import useSwr from 'swr';
import axios from 'axios';

import Head from 'next/head';

import Page from '../src/Page';
import Splash from '../src/HP/Splash';
import TwoColumns from '../src/HP/TwoColumns';
import Slides from '../src/HP/Slides';

const newLocal = process.env.NODE_ENV === 'development';
const uri = newLocal
  ? 'http://local.casa.it:3000/api/home'
  : 'https://papunextjs.herokuapp.com/api/home';

const fetcher = (url) => axios.get(url).then((r) => r.data);

export async function getServerSideProps() {
  const data = await fetcher(uri);
  return { props: { data } };
}

export default function Home(props) {
  const { data: initialData } = props;
  const { data } = useSwr(uri, fetcher, { initialData });
  const { slider, section1 } = data;
  return (
    <Page>
      <div className="glob_container">
        <Head>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no"
          />
        </Head>
        <div className="glob_content">
          <Splash sliderContent={slider} />
          <TwoColumns contents={section1} />
          <Slides />
        </div>
      </div>
    </Page>
  );
}
Home.propTypes = {
  data: PropTypes.instanceOf(Object),
};
Home.defaultProps = {
  data: {},
};
