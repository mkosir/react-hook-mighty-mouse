import React from 'react';

import DocTabTemplate from 'react-doc-tab-template';
import Demo from './Flashlight.doctab';

const code = `import React from 'react';

import useMightyMouse from '../../src';
import './Flashlight.doctab.scss';
import imgFlashlight from './img/flashlight.png';

const Flashlight = () => {
  const {
    position: {
      page: { x, y },
    },
  } = useMightyMouse();

  const style = {
    backgroundImage: x && y ? \`url(\${imgFlashlight})\` : null,
    backgroundPositionX: x - 200,
    backgroundPositionY: y - 350,
  };

  return (
    <div className="flashlight" style={style}>
      <div className="quote">
        <div>
          “Light thinks it travels faster than anything but it is wrong. No matter how fast light
          travels, it finds the darkness has always got there first, and is waiting for it.“
        </div>
      </div>
      <div className="author">Terry Pratchett</div>
    </div>
  );
};

export default Flashlight;
`;

const style = `.flashlight {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 35px;
  font-family: helvetica neue, helvetica, verdana, arial;
  pointer-events: none;
  width: 100vw;
  height: 80vh;
  background-color: #000000;
  background-repeat: no-repeat;

  .quote {
    width: 80vw;
    line-height: 140%;
  }

  .author {
    width: 80vw;
    line-height: 140%;
    font-size: 0.8em;
    font-style: italic;
  }
}
`;

const _Flashlight = () => (
  <DocTabTemplate code={code} style={style} codeExt="tsx" styleExt="scss">
    <Demo />
  </DocTabTemplate>
);

export default _Flashlight;
