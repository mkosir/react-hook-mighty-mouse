import React from 'react';

import StorybookTabComponent from '../_StorybookTabComponent/StorybookTabComponent';
import Demo from './RelativePosition';

const jsx = `import React from 'react';

import useMightyMouse from '../../src';
import './RelativePosition.scss';
import imgCheese from './img/cheese.png';

const RelativePosition = () => {
  const {
    positionRelative: { x, y },
  } = useMightyMouse('cheese');
  return (
    <div className="relative-position">
      <img src={imgCheese} id="cheese" alt="pic" />
      <div className="display">
        Mouse relative position
        <div className="row">
          x:<div>{x && x.toFixed(0)}</div>
        </div>
        <div className="row">
          y: <div>{y && y.toFixed(0)}</div>
        </div>
      </div>
    </div>
  );
};

export default RelativePosition;`;

const scss = `.relative-position {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  img {
    width: 400px;
  }

  .display {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: 2px solid black;
    border-radius: 8px;
    padding: 10px;
    font-size: 23px;
    margin-top: 40px;

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
}`;

const StorybookTabs = () => (
  <StorybookTabComponent jsx={jsx} scss={scss}>
    <Demo />
  </StorybookTabComponent>
);

export default StorybookTabs;
