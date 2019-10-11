import React from 'react';

import StorybookTabComponent from '../_StorybookTabComponent/StorybookTabComponent';
import Demo from './MouseCheese';

const jsx = `import React from 'react';

import useMightyMouse from '../../src';
import './MouseCheese.scss';
import imgCheese from './img/cheese.png';

const MouseCheese = () => {
  const {
    position: { client },
    positionRelative: { x, y },
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
      <div className="positions1">
        <div className="position">
          <div className="header">Position</div>
          <div className="row">
            x: <div>{client.x}</div>
          </div>
          <div className="row">
            y: <div>{client.y}</div>
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

export default MouseCheese;`;

const scss = `.mouse-cheese {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 18px;

  img {
    cursor: none;
    width: 250px;

    &:hover + #cursor {
      display: block;
    }
  }

  #cursor {
    position: absolute;
    display: none;
    pointer-events: none;
  }

  .positions1 {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: 2px solid black;
    border-radius: 8px;
    padding: 5px;
    width: 180px;
    margin-top: 30px;

    .position {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      margin: 0;
      &:nth-child(2) {
        margin-top: 10px;
      }

      .header {
        font-size: 1em;
        text-decoration: underline;
      }

      .row {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        font-size: 0.85em;
        margin-top: 5px;
        min-width: 60px;
      }
    }
  }

  .mouse-hover {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: 2px solid black;
    border-radius: 8px;
    padding: 5px;
    margin-top: 5px;

    .header {
      font-size: 1em;
      text-decoration: underline;
    }
    .row {
      font-size: 0.9em;
      margin-top: 10px;
      color: rgb(236, 189, 59);
      line-height: 20px;
    }
  }

  .main-row-2 {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-top: 5px;

    .col {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      border: 2px solid black;
      border-radius: 8px;
      padding: 5px;
      margin: 0px 5px;
      min-width: 210px;

      .header {
        font-size: 1em;
        text-decoration: underline;
      }

      .keys {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        margin-top: 5px;

        .key {
          font-size: 0.85em;
          line-height: 20px;
        }
      }
    }
  }
}`;

const StorybookTabs = () => (
  <StorybookTabComponent jsx={jsx} scss={scss}>
    <Demo />
  </StorybookTabComponent>
);

export default StorybookTabs;
