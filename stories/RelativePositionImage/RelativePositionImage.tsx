import React from 'react';

import useMightyMouse from '../../src';
import './RelativePositionImage.scss';
import imgCheese from './img/cheese.png';

const RelativePositionImage = () => {
  const {
    positionRelative: { x, y },
  } = useMightyMouse(true, 'cheese');
  return (
    <div className="relative-position-image">
      <img src={imgCheese} id="cheese" alt="pic" />
      <div className="display">
        <div className="header">Mouse relative position on 🧀</div>
        <div className="row">
          x: <div>{x && x.toFixed(0)}</div>
        </div>
        <div className="row">
          y: <div>{y && y.toFixed(0)}</div>
        </div>
      </div>
    </div>
  );
};

export default RelativePositionImage;
