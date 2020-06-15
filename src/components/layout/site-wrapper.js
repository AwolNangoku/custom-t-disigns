import React from 'react';
import PropTypes from 'prop-types';
import Header from '../header/header';
import Footer from '../footer/footer';
import HeaderBanner from '../header/banner';
import styles from '../../pages/siteCSS.module.css';

const SiteWrapper = ({children}) => (
    <div className={styles.siteWrapper}>
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