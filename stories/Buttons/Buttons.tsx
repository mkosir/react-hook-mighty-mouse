import React from 'react';

import useMightyMouse from '../../src';
import './Buttons.scss';

const Buttons = () => {
  const { buttons } = useMightyMouse();

  return (
    <div className="buttons">
      <div className="header">Pressed mouse buttons 🖱️</div>
      <div className="keys">
        <div className="key">{buttons.left ? <b>Left 👇</b> : 'Left'}</div>
        <div className="key">{buttons.middle ? <b>Middle 👇</b> : 'Middle'}</div>
        <div className="key">{buttons.right ? <b>Right 👇</b> : 'Right'}</div>
        <div className="key">{buttons.wheelDown ? <b>Wheel Down 👇</b> : 'Wheel Down'}</div>
        <div className="key">{buttons.wheelUp ? <b>Wheel Up 👆</b> : 'Wheel Up'}</div>
      </div>
    </div>
  );
};

export default Buttons;
