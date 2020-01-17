import React from 'react';

import DocTabTemplate from 'react-doc-tab-template';
import Demo from './MouseHover.doctab';

const code = `import React from 'react';

import useMightyMouse from '../../src';
import './MouseHover.doctab.scss';
import imgCheese from './img/cheese.png';

const MouseHover = () => {
  const {
    selectedElement: { isHover },
  } = useMightyMouse(true, 'cheese');
  return (
    <div className="mouse-hover">
      <img src={imgCheese} id="cheese" alt="pic" />
      <div className="display">
        Hovering Over Cheese
        <div className="row">{isHover ? 'Yes' : 'No'}</div>
      </div>
    </div>
  );
};

export default MouseHover;
`;

const style = `.mouse-hover {
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

    .row {
      font-size: 0.9em;
      margin-top: 10px;
      color: rgb(236, 189, 59);
    }
  }
}
`;

const _MouseHover = () => (
  <DocTabTemplate code={code} style={style} codeExt="tsx" styleExt="scss">
    <Demo />
  </DocTabTemplate>
);

export default _MouseHover;
