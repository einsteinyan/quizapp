import React from 'react';
import { Helmet } from 'react-helmet';
import Header from './Header'


const DefaultLayout = ({ title }) => (
  <div>
    <Helmet>
      <title>{title}</title>
    </Helmet>
    <Header />
  </div>
);

export default DefaultLayout;
