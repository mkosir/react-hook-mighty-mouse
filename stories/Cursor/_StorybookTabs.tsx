import React from 'react';

import StorybookTabComponent from '../_StorybookTabComponent/StorybookTabComponent';
import Demo from './Cursor';

const jsx = `import React from 'react';

import useMightyMouse from '../../src';
import './Cursor.scss';
import imgCheese from './img/cheese.png';

const Cursor = () => {
  const {
    position: { client },
  } = useMightyMouse();
  return (
    <div className="cursor">
      <img src={imgCheese} className="cheese" alt="pic" />
      <div id="cursor" style={{ left: client.x, top: client.y }}>
        🐭
      </div>
    </div>
  );
};

export default Cursor;`;

const scss = `.cursor {
  .cheese {
    cursor: none;
    width: 200px;

    &:hover + #cursor {
      display: block;
    }
  }

  #cursor {
    position: absolute;
    display: none;
    pointer-events: none;
  }
}`;

const StorybookTabs = () => (
  <StorybookTabComponent jsx={jsx} scss={scss}>
    <Demo />
  </StorybookTabComponent>
);

export default StorybookTabs;
