import React from 'react';

import DemoTab from 'react-demo-tab';
import Demo from './Positions.demotab';

const code = `import React from 'react';

import useMightyMouse from '../../src';
import './Positions.demotab.scss';

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
          x: <div>{client.x && client.x.toFixed(0)}</div>
        </div>
        <div className="row">
          y: <div>{client.y && client.y.toFixed(0)}</div>
        </div>
      </div>
      <div className="position">
        Page (viewport)
        <div className="row">
          x: <div>{page.x && page.x.toFixed(0)}</div>
        </div>
        <div className="row">
          y: <div>{page.y && page.y.toFixed(0)}</div>
        </div>
      </div>
      <div className="position">
        Screen (monitor)
        <div className="row">
          x: <div>{screen.x && screen.x.toFixed(0)}</div>
        </div>
        <div className="row">
          y: <div>{screen.y && screen.y.toFixed(0)}</div>
        </div>
      </div>
    </div>
  );
};

export default Positions;
`;

const style = `.positions {
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
}
`;

const _Positions = () => (
  <DemoTab code={code} style={style} codeExt="tsx" styleExt="scss">
    <Demo />
  </DemoTab>
);

export default _Positions;
