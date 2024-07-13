// src/GridAnimation.js

import { Component } from 'react';
import './desktop.css'; // Import CSS for styling

const images = [
    'images/a.png',
    'images/ab.png',
 'images/abc.png',
    'images/aaa.png',
    'images/aaaa.png',
    'images/teams.png',
    'images/teams.png',
    'images/teams.png',
    'images/teams.png',
    'images/teams.png',
    'images/teams.png',
    'images/teams.png',
    'images/teams.png',
    'images/teams.png',
    'images/teams.png',
 'images/teams.png',
    'images/teams.png',
    'images/teams.png',
    'images/teams.png',
    'images/teams.png',
    'images/teams.png',
    'images/teams.png',
    'images/teams.png',
    'images/teams.png',
    'images/teams.png',
    'images/teams.png',
    'images/teams.png',
    'images/teams.png',
 'images/teams.png',
    'images/teams.png',
    'images/teams.png',
    'images/teams.png',
    'images/teams.png',
    'images/teams.png',
    'images/teams.png',
    'images/teams.png',
    'images/teams.png',
    'images/teams.png',
    'images/teams.png',
    'images/teams.png',
    'images/teams.png',
 'images/teams.png',
    'images/teams.png',
    'images/teams.png',
    'images/teams.png',
    'images/teams.png',
    'images/teams.png',
    'images/teams.png',
    'images/teams.png',
    'images/a.png',
    'images/teams.png',
    'images/teams.png',
    'images/teams.png',
    'images/teams.png',
 'images/teams.png',
    'images/teams.png',
    'images/teams.png',
    'images/teams.png',
    'images/teams.png',
    'images/teams.png',
    'images/teams.png',
    'images/teams.png',
    'images/teams.png',
    'images/teams.png',
    'images/teams.png',
    'images/teams.png',
    'images/teams.png',
 'images/teams.png',
    'images/teams.png',
    'images/teams.png',
    'images/teams.png',
    'images/teams.png',
    'images/teams.png',
    'images/teams.png',
    'images/teams.png',
    'images/teams.png',
    'images/teams.png',
    'images/teams.png',


  ];
  
  const Desktop = () => {
    return (
        <div className="parent-container">

      <div className="grid-container">
        {images.map((src, index) => (
          <div className="grid-item" key={index}>
            <img src={src} alt={`Grid item ${index + 1}`} />
          </div>
        ))}
      </div>
        </div>
    );
  };
  
 

export default Desktop;
