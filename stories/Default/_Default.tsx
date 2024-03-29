import React from 'react';

import DemoTab from 'react-demo-tab';
import Demo from './Default.demotab';

const code = `import React from 'react';

import useMightyMouse from '../../src';
import './Default.demotab.scss';

const Default = () => {
  const {
    position: { client },
  } = useMightyMouse();
  return (
    <div className="default">
      Mouse position
      <div className="row">
        x: <div>{client.x && client.x.toFixed(0)}</div>
      </div>
      <div className="row">
        y: <div>{client.y && client.y.toFixed(0)}</div>
      </div>
    </div>
  );
};

export default Default;
`;

const style = `.default {
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
}
`;

const _Default = () => (
  <DemoTab code={code} style={style} codeExt="tsx" styleExt="scss">
    <Demo />
  </DemoTab>
);

export default _Default;
