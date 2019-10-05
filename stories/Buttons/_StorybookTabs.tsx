import React from 'react';

import StorybookTabComponent from '../_StorybookTabComponent/StorybookTabComponent';
import Demo from './Buttons';

const jsx = `import React from 'react';

import useMightyMouse from '../../src';
import './Buttons.scss';

const Buttons = () => {
  const { buttons } = useMightyMouse();

  return (
    <div className="buttons">
      Press mouse button
      <ul>
        {buttons.left && (
          <li>
            <b>Left</b> button pressed
          </li>
        )}
        {buttons.middle && (
          <li>
            <b>Middle</b> button pressed
          </li>
        )}
        {buttons.right && (
          <li>
            <b>Right</b> button pressed
          </li>
        )}
      </ul>
    </div>
  );
};

export default Buttons;`;

const scss = `.buttons {
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
    min-width: 200px;
  }
}`;

const StorybookTabs = () => (
  <StorybookTabComponent jsx={jsx} scss={scss}>
    <Demo />
  </StorybookTabComponent>
);

export default StorybookTabs;
