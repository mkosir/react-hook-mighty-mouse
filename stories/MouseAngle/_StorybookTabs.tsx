import React from 'react';

import StorybookTabComponent from '../_StorybookTabComponent/StorybookTabComponent';
import Demo from './MouseAngle';

const jsx = `import React from 'react';

import useMightyMouse from '../../src';
import './MouseAngle.scss';

const MouseAngle = () => {
  const {
    positionRelative: { angle },
  } = useMightyMouse(true, 'trackElement');
  return (
    <div className="mouse-angle">
      <div className="title">Circle around 🧀</div>
      <div className="angle">
        <div className="header">Mouse Angle</div>
        <div className="row">{angle ? <div>{angle.toFixed(0)}°</div> : <div>0°</div>}</div>
      </div>
      <div id="trackElement">🧀</div>
    </div>
  );
};

export default MouseAngle;`;

const scss = `.mouse-angle {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 21px;

  .title {
    font-size: 1.3em;
    margin-bottom: 40px;
  }

  .angle {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: 2px solid black;
    border-radius: 5px;
    padding: 15px;
    margin-bottom: 170px;

    .header {
      font-size: 1em;
      text-decoration: underline;
    }

    .row {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      font-size: 0.9em;
      margin-top: 10px;
      min-width: 60px;
    }
  }
}`;

const StorybookTabs = () => (
  <StorybookTabComponent jsx={jsx} scss={scss}>
    <Demo />
  </StorybookTabComponent>
);

export default StorybookTabs;
