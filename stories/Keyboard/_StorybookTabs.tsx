import React from 'react';

import StorybookTabComponent from '../_StorybookTabComponent/StorybookTabComponent';
import Demo from './Keyboard';

const jsx = `import React from 'react';

import useMightyMouse from '../../src';
import './Keyboard.scss';

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

export default Keyboard;`;

const scss = `.keyboard {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 26px;

  .header {
    font-size: 1em;
    text-decoration: underline;
  }

  .keys {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    margin-top: 40px;

    .key {
      font-size: 0.8em;
      margin-bottom: 35px;
      line-height: 10px;
    }
  }
}`;

const StorybookTabs = () => (
  <StorybookTabComponent jsx={jsx} scss={scss}>
    <Demo />
  </StorybookTabComponent>
);

export default StorybookTabs;
