import React from 'react';

import DemoTab from 'react-demo-tab';
import Demo from './RelativePositionImage.demotab';

const code = `import React from 'react';

import useMightyMouse from '../../src';
import './RelativePositionImage.demotab.scss';
import imgCheese from './img/cheese.png';

const RelativePositionImage = () => {
  const {
    selectedElement: {
      position: { x, y },
    },
  } = useMightyMouse(true, 'cheese');
  return (
    <div className="relative-position-image">
      <img src={imgCheese} id="cheese" alt="pic" />
      <div className="display">
        <div className="header">Mouse relative position on 🧀</div>
        <div className="row">
          x: <div>{x && x.toFixed(0)}</div>
        </div>
        <div className="row">
          y: <div>{y && y.toFixed(0)}</div>
        </div>
      </div>
    </div>
  );
};

export default RelativePositionImage;
`;

const style = `.relative-position-image {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  img {
    width: 300px;
  }

  .display {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: 2px solid black;
    border-radius: 8px;
    padding: 10px;
    font-size: 21px;
    margin-top: 40px;

    .header {
      font-size: 1em;
    }

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
}
`;

const _RelativePositionImage = () => (
  <DemoTab code={code} style={style} codeExt="tsx" styleExt="scss">
    <Demo />
  </DemoTab>
);

export default _RelativePositionImage;
