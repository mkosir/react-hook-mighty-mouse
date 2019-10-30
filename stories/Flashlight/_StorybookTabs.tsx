import React from 'react';

import StorybookTabComponent from '../_StorybookTabComponent/StorybookTabComponent';
import Demo from './Flashlight';

const jsx = `import React, { useRef } from 'react';

import useMightyMouse from '../../src';
import './Flashlight.scss';
import imgFlashlight from './img/flashlight.png';

const Flashlight = () => {
  let toggleFlashlight = useRef(true);

  const {
    position: {
      page: { x, y },
    },
    eventType,
  } = useMightyMouse();
  if (eventType === 'mousedown') {
    toggleFlashlight.current = !toggleFlashlight.current;
  }
  const style = {
    backgroundImage: toggleFlashlight.current ? \`url(\${imgFlashlight})\` : null,
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

export default Flashlight;`;

const scss = `.flashlight {
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
}`;

const StorybookTabs = () => (
  <StorybookTabComponent jsx={jsx} scss={scss}>
    <Demo />
  </StorybookTabComponent>
);

export default StorybookTabs;
