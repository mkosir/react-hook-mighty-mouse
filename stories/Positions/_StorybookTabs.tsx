import React from 'react';

import StorybookTabComponent from '../_StorybookTabComponent/StorybookTabComponent';
import Demo from './Positions';

const jsx = `import React from 'react';

import useMightyMouse from '../../src';
import './Positions.scss';

const Positions = () => {
  const {
    position: { client, page, screen },
  } = useMightyMouse();
  return (
    <div className="positions">
      Mouse positions
      <div className="position">
        <div>Client (browser rendered content)</div>
        <div className="row">
          x:<div>{client.x}</div>
        </div>
        <div className="row">
          y: <div>{client.y}</div>
        </div>
      </div>
      <div className="position">
        Page (viewport)
        <div className="row">
          x:<div>{page.x}</div>
        </div>
        <div className="row">
          y: <div>{page.y}</div>
        </div>
      </div>
      <div className="position">
        Screen (monitor)
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

export default Positions;`;

const scss = `.positions {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 2px solid black;
  border-radius: 8px;
  padding: 20px 10px;
  font-size: 23px;
  width: 350px;

  .position {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
    font-size: 0.7em;

    .row {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      font-size: 0.75em;
      margin-top: 10px;
      width: 40px;
    }
  }
}`;

const StorybookTabs = () => (
  <StorybookTabComponent jsx={jsx} scss={scss}>
    <Demo />
  </StorybookTabComponent>
);

export default StorybookTabs;
