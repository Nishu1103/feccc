import React from 'react';
import './index.scss';
import 'animate.css/animate.min.css';


const Animatedletters = ({ letterClass, strArray, idx }) => {
  return (
    <span>
      {strArray.map((char, i) => (
        <span key={char + i} className={`${letterClass} _${i + idx}`}>
          {char}
        </span>
      ))}
    </span>
  );
  
}

export default Animatedletters;
