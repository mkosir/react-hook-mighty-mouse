import React from 'react';

import useMightyMouse from '../../src';
import './Cursor.demotab.scss';
import imgCheese from './img/cheese.png';

const Cursor = () => {
  const {
    position: { client },
  } = useMightyMouse();
  return (
    <div className="cursor">
      <img src={imgCheese} className="cheese" alt="pic" />
      <div id="cursor" style={{ left: client.x, top: client.y }}>
        🐭
      </div>
    </div>
  );
};

export default Cursor;
