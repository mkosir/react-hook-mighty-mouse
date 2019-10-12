import React from 'react';

import useMightyMouse from '../../src';
import './MouseCheese.scss';
import imgCheese from './img/cheese.png';

const MouseCheese = () => {
  const {
    position: { client },
    positionRelative: { x, y, angle },
    isHover,
    buttons,
    keyboard,
  } = useMightyMouse(true, 'cheese');
  return (
    <div className="mouse-cheese">
      <img src={imgCheese} id="cheese" alt="pic" />
      <div id="cursor" style={{ left: client.x, top: client.y }}>
        🐭
      </div>
      <div className="pos">
        <div className="position">
          <div className="header">Position</div>
          <div className="row">
            x: <div>{client.x && client.x.toFixed(0)}</div>
          </div>
          <div className="row">
            y: <div>{client.y && client.y.toFixed(0)}</div>
          </div>
        </div>
        <div className="position">
          <div className="header">Relative Position</div>
          <div className="row">
            x: <div>{x && x.toFixed(0)}</div>
          </div>
          <div className="row">
            y: <div>{y && y.toFixed(0)}</div>
          </div>
          <div className="row">angle: {angle && <div>{angle.toFixed(0)}°</div>}</div>
        </div>
      </div>
      <div className="mouse-hover">
        <div className="header">Hovering Over Cheese</div>
        <div className="row">{isHover ? <b>Yes 🧀</b> : 'No'}</div>
      </div>
      <div className="main-row-2">
        <div className="col">
          <div className="header">Pressed mouse buttons 🖱️</div>
          <div className="keys">
            <div className="key">{buttons.left ? <b>Left 👇</b> : 'Left'}</div>
            <div className="key">{buttons.middle ? <b>Middle 👇</b> : 'Middle'}</div>
            <div className="key">{buttons.right ? <b>Right 👇</b> : 'Right'}</div>
          </div>
        </div>
        <div className="col">
          <div className="header">Pressed keys ⌨️</div>
          <div className="keys">
            <div className="key">{keyboard.ctrl ? <b>Ctrl 👇</b> : 'Ctrl'}</div>
            <div className="key">{keyboard.shift ? <b>Shift 👇</b> : 'Shift'}</div>
            <div className="key">{keyboard.alt ? <b>Alt 👇</b> : 'Alt'}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MouseCheese;
