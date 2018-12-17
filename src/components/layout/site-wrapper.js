import React from 'react';
import PropTypes from 'prop-types';
import Header from '../header/header';
import Footer from '../footer/footer';
import HeaderBanner from '../header/banner';

const SiteWrapper = ({children}) => (
    <div style={{margin: "5px auto", width: "1024px", height: "1000px", padding: "10px 5px", backgroundColor: "grey"}}>
        <Header />
        <HeaderBanner />
        {children}
        <Footer />
    </div>
);

SiteWrapper.propTypes = {
    children: PropTypes.node.isRequired,
  }
  
export default SiteWrapper