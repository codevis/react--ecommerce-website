import React from 'react';
//it has history and match fuction we used below for automatically identifies the url to go by clicking an image
import { withRouter } from 'react-router-dom';


import './menu-item.styles.scss';

const MenuItem = ({ title, imageUrl, size, history, linkUrl, match }) => (//getting data from directory component
  <div
    className={`${size} menu-item`}//checks the history url with the linkurl
    onClick={() => history.push(`${match.url}${linkUrl}`)}//this manage the url to automatically goes by data from directory url
  >
  
    <div
      className='background-image'
      style={{
        backgroundImage: `url(${imageUrl})`
      }}
    />
    <div className='content'>
      <h1 className='title'>{title.toUpperCase()}</h1>
      <span className='subtitle'>SHOP NOW</span>
    </div>
  </div>
);

export default withRouter(MenuItem);
