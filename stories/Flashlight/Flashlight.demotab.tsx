import React from 'react';

import useMightyMouse from '../../src';
import './Flashlight.demotab.scss';
import imgFlashlight from './img/flashlight.png';

const Flashlight = () => {
  const {
    position: {
      page: { x, y },
    },
  } = useMightyMouse();

  const style = {
    backgroundImage: x && y ? `url(${imgFlashlight})` : null,
    backgroundPositionX: x - 200,
    backgroundPositionY: y - 350,
  };

  return (
    <div className="flashlight" style={style}>
      <div className="quote">
        <div>
          “Light thinks it travels faster than anything but it is wrong. No matter how fast light
          travels, it finds the darkness has always got there first, and is waiting for it.“
        </div>
      </div>
      <div className="author">Terry Pratchett</div>
    </div>
  );
};

export default Flashlight;
