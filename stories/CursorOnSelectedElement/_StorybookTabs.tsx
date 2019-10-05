import React from 'react';

import StorybookTabComponent from '../_StorybookTabComponent/StorybookTabComponent';
import Demo from './CursorOnSelectedElement';

const jsx = `import React from 'react';

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

export default CursorOnSelectedElement;`;

const scss = `.cursor-on-selected-element {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .cheese {
    cursor: none;
    width: 300px;

    &:hover + #cursor {
      display: block;
    }
  }

  #cursor {
    position: absolute;
    display: none;
    pointer-events: none;
  }

  .default {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: 2px solid black;
    border-radius: 8px;
    padding: 10px;
    font-size: 23px;
    width: 200px;
    margin-top: 30px;

    .row {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      font-size: 0.8em;
      margin-top: 10px;
      min-width: 50px;
    }
  }

  .buttons {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 23px;
    transition: all 2.5s ease;

    ul {
      font-size: 0.8em;
      padding-left: 0;
      list-style: none;
      min-width: 250px;
    }
  }
}`;

const StorybookTabs = () => (
  <StorybookTabComponent jsx={jsx} scss={scss}>
    <Demo />
  </StorybookTabComponent>
);

export default StorybookTabs;
