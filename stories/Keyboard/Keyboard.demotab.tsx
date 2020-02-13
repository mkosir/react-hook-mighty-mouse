import React from 'react';

import useMightyMouse from '../../src';
import './Keyboard.demotab.scss';

const Keyboard = () => {
  const { keyboard } = useMightyMouse();

  return (
    <div className="keyboard">
      <div className="header">Pressed keys ⌨️</div>
      <div className="keys">
        <div className="key">{keyboard.ctrl ? <b>Ctrl 👇</b> : 'Ctrl'}</div>
        <div className="key">{keyboard.shift ? <b>Shift 👇</b> : 'Shift'}</div>
        <div className="key">{keyboard.alt ? <b>Alt 👇</b> : 'Alt'}</div>
      </div>
    </div>
  );
};

export default Keyboard;
