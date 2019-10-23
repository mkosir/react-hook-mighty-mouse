import React from 'react';

import useMightyMouse from '../../src';
import './MouseHover.scss';
import imgCheese from './img/cheese.png';

const MouseHover = () => {
  const {
    selectedElement: { isHover },
  } = useMightyMouse(true, 'cheese');
  return (
    <div className="mouse-hover">
      <img src={imgCheese} id="cheese" alt="pic" />
      <div className="display">
        Hovering Over Cheese
        <div className="row">{isHover ? 'Yes' : 'No'}</div>
      </div>
    </div>
  );
};

export default MouseHover;
