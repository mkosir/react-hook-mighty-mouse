import React from 'react';

import useMightyMouse from '../../src';
import './RelativePosition.scss';
import imgCheese from './img/cheese.png';

const RelativePosition = () => {
  const {
    positionRelative: { x, y },
  } = useMightyMouse('cheese');
  return (
    <div className="relative-position">
      <img src={imgCheese} id="cheese" alt="pic" />
      <div className="display">
        Mouse relative position
        <div className="row">
          x:<div>{x && x.toFixed(0)}</div>
        </div>
        <div className="row">
          y: <div>{y && y.toFixed(0)}</div>
        </div>
      </div>
    </div>
  );
};

export default RelativePosition;
