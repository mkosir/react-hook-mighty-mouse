import React from 'react';

import useMightyMouse from '../../src';
import './CursorOnSelectedElement.scss';
import imgCheese from './img/cheese.png';

const CursorOnSelectedElement = () => {
  const {
    position: { client },
    buttons,
  } = useMightyMouse('trackElement');
  return (
    <div className="cursor-on-selected-element">
      <img src={imgCheese} id="trackElement" className="cheese" alt="pic" />
      <div id="cursor" style={{ left: client.x, top: client.y }}>
        🐭
      </div>
      <div className="default">
        Mouse position
        <div className="row">
          x:<div>{client.x}</div>
        </div>
        <div className="row">
          y: <div>{client.y}</div>
        </div>
      </div>
      <div className="buttons">
        <ul>
          {buttons.left && (
            <li>
              <b>Left</b> 🐭 button pressed on 🧀
            </li>
          )}
          {buttons.middle && (
            <li>
              <b>Middle</b> 🐭 button pressed on 🧀
            </li>
          )}
          {buttons.right && (
            <li>
              <b>Right</b> 🐭 button pressed on 🧀
            </li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default CursorOnSelectedElement;
