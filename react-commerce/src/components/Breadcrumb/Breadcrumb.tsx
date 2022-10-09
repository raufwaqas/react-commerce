import React, { useEffect, useRef, useState } from 'react';
import Text from '../Text/Text';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { NavItem } from '../Data/DataHeader';
import Styles from './Breadcrumb.module.scss';

interface BreadcrumbProps {
  title: String;
  path: String;
  pagepath: string;
  sectionpath: string;
  tabIndex?: number;
}
const Breadcrumb = ({
  title,
  path,
  pagepath,
  sectionpath,
}: BreadcrumbProps) => {
  const listHeadingRef = useRef(null);
  return (
    <>
      <div
        className={Styles.breadcrumb_block}
        role='navigation'
        aria-label='Sub Navigation'
      >
        <div
          className='breadcrumb_block_wrapper'

          ref={listHeadingRef}
        >
          <div className={Styles.breadcrumb_block_detail}>
            <span
              className={Styles.breadcrumb_block_title}
              aria-label={`you are in ${title} page`}
            >
              {title}
            </span>
            <div
              className={Styles.breadcrum_block_nav}
              aria-label='Links to visit certian pages'
            >
              <span
                className='breadcrum_block_nav_home'
                aria-label='Visit Home page'
              >
                <Link to='/' aria-label='Click here go back to Home page'>
                  <h6>{path}</h6>
                </Link>
              </span>
              <span className='breadcrum_block_nav_home' aria-hidden='true'>
                <h6>{`>`}</h6>
              </span>

              <span
                className='breadcrum_block_nav_pagepath'
                aria-label={`Click here to visit ${title} page`}
              >
                <Link to={`/${sectionpath.toLowerCase()}`}>
                  <h6>{pagepath}</h6>
                </Link>
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Breadcrumb;
