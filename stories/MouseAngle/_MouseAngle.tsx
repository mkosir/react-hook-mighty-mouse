import React from 'react';

import DocTabTemplate from 'react-doc-tab-template';
import Demo from './MouseAngle.doctab';

const code = `import React from 'react';

import useMightyMouse from '../../src';
import './MouseAngle.doctab.scss';

const MouseAngle = () => {
  const {
    selectedElement: {
      position: { angle },
    },
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

export default MouseAngle;
`;

const style = `.mouse-angle {
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
}
`;

const _MouseAngle = () => (
  <DocTabTemplate code={code} style={style} codeExt="tsx" styleExt="scss">
    <Demo />
  </DocTabTemplate>
);

export default _MouseAngle;
