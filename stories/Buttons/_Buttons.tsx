import React from 'react';

import DemoTab from 'react-demo-tab';
import Demo from './Buttons.demotab';

const code = `import React from 'react';

import useMightyMouse from '../../src';
import './Buttons.demotab.scss';

const Buttons = () => {
  const { buttons } = useMightyMouse();

  return (
    <div className="buttons">
      <div className="header">Pressed mouse buttons 🖱️</div>
      <div className="keys">
        <div className="key">{buttons.left ? <b>Left 👇</b> : 'Left'}</div>
        <div className="key">{buttons.middle ? <b>Middle 👇</b> : 'Middle'}</div>
        <div className="key">{buttons.right ? <b>Right 👇</b> : 'Right'}</div>
        <div className="key">{buttons.wheelDown ? <b>Wheel Down 👇</b> : 'Wheel Down'}</div>
        <div className="key">{buttons.wheelUp ? <b>Wheel Up 👆</b> : 'Wheel Up'}</div>
      </div>
    </div>
  );
};

export default Buttons;
`;

const style = `.buttons {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 26px;

  .header {
    font-size: 1em;
    text-decoration: underline;
  }

  .keys {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    margin-top: 40px;

    .key {
      font-size: 0.8em;
      margin-bottom: 35px;
      line-height: 10px;
    }
  }
}
`;

const _Buttons = () => (
  <DemoTab code={code} style={style} codeExt="tsx" styleExt="scss">
    <Demo />
  </DemoTab>
);

export default _Buttons;
