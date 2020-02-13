import React from 'react';

import useMightyMouse from '../../src';
import './MouseCheese.demotab.scss';
import imgCheese from './img/cheese.png';

const MouseCheese = () => {
  const {
    position: { client },
    selectedElement: {
      position: { x, y, angle },
      boundingRect,
      isHover,
    },
    buttons,
    keyboard,
  } = useMightyMouse(true, 'cheese', { x: 125, y: 70 });

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
      <div className="size">
        <div className="header">Cheese</div>
        <div className="columns">
          <div className="col-size-1">
            <div className="row">
              Width: <div>{boundingRect.width && boundingRect.width.toFixed(0)}</div>
            </div>
            <div className="row">
              Height: <div>{boundingRect.height && boundingRect.height.toFixed(0)}</div>
            </div>
          </div>
          <div className="col-size-2">
            <div className="row">
              Left: <div>{boundingRect.left && boundingRect.left.toFixed(0)}</div>
            </div>
            <div className="row">
              Top: <div>{boundingRect.top && boundingRect.top.toFixed(0)}</div>
            </div>
          </div>
        </div>
      </div>
      <div className="mouse-hover">
        <div className="header">Hovering Over Cheese</div>
        <div className="row">{isHover ? <b>Yes 🧀</b> : 'No'}</div>
      </div>
      <div className="main-row-2">
        <div className="col">
          <div className="header">Mouse buttons 🖱️</div>
          <div className="buttons">
            <div className="btn-row1">
              <div>{buttons.left ? <b>Left 👇</b> : 'Left'}</div>
              <div>{buttons.middle ? <b>Middle 👇</b> : 'Middle'}</div>
              <div>{buttons.right ? <b>Right 👇</b> : 'Right'}</div>
            </div>
            <div className="btn-row2">
              <div>{buttons.wheelDown ? <b>Wheel Down 👇</b> : 'Wheel Down'}</div>
              <div>{buttons.wheelUp ? <b>Wheel Up 👆</b> : 'Wheel Up'}</div>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="header">Pressed keys ⌨️</div>
          <div className="keys">
            <div>{keyboard.ctrl ? <b>Ctrl 👇</b> : 'Ctrl'}</div>
            <div>{keyboard.shift ? <b>Shift 👇</b> : 'Shift'}</div>
            <div>{keyboard.alt ? <b>Alt 👇</b> : 'Alt'}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MouseCheese;
