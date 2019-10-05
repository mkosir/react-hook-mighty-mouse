import React from 'react';

import StorybookTabComponent from '../_StorybookTabComponent/StorybookTabComponent';
import Demo from './Positions';

const jsx = `import React from 'react';

import useMightyMouse from '../../src';
import './Positions.scss';

const Default = () => {
  const {
    position: { client, page, screen },
  } = useMightyMouse();
  return (
    <div className="positions">
      Mouse position
      <div className="position">
        <div>
          <u>Client (browser rendered content)</u>
        </div>
        <div className="row">
          x:<div>{client.x}</div>
        </div>
        <div className="row">
          y: <div>{client.y}</div>
        </div>
      </div>
      <div className="position">
        <u>Page (viewport)</u>
        <div className="row">
          x:<div>{page.x}</div>
        </div>
        <div className="row">
          y: <div>{page.y}</div>
        </div>
      </div>
      <div className="position">
        <u>Screen (monitor)</u>
        <div className="row">
          x:<div>{screen.x}</div>
        </div>
        <div className="row">
          y: <div>{screen.y}</div>
        </div>
      </div>
    </div>
  );
};

export default Default;`;

const scss = `.positions {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 2px solid black;
  border-radius: 8px;
  padding: 10px;
  font-size: 22px;
  width: 400px;

  .position {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
    font-size: 0.75em;

    .row {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      font-size: 0.7em;
      margin-top: 10px;
      max-width: 80px;
      width: 200px;
    }
  }
}`;

const StorybookTabs = () => (
  <StorybookTabComponent jsx={jsx} scss={scss}>
    <Demo />
  </StorybookTabComponent>
);

export default StorybookTabs;
