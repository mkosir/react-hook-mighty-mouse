import React from 'react';

import StorybookTabComponent from '../_StorybookTabComponent/StorybookTabComponent';
import Demo from './SelectedElement';

const jsx = `import React from 'react';

import useMightyMouse from '../../src';
import './SelectedElement.scss';

const SelectedElement = () => {
  const {
    position: { client },
  } = useMightyMouse('trackElement');
  return (
    <div className="selected-element" id="trackElement">
      Mouse position
      <div className="row">
        x:<div>{client.x}</div>
      </div>
      <div className="row">
        y: <div>{client.y}</div>
      </div>
    </div>
  );
};

export default SelectedElement;`;

const scss = `.selected-element {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 2px solid black;
  border-radius: 8px;
  padding: 10px;
  font-size: 23px;

  .row {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    font-size: 0.8em;
    margin-top: 10px;
    min-width: 50px;
  }
}`;

const StorybookTabs = () => (
  <StorybookTabComponent jsx={jsx} scss={scss}>
    <Demo />
  </StorybookTabComponent>
);

export default StorybookTabs;
