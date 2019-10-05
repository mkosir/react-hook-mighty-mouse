import React from 'react';

import useMightyMouse from '../../src';
import './Buttons.scss';

const Buttons = () => {
  const { buttons } = useMightyMouse();

  return (
    <div className="buttons">
      Press mouse button
      <ul>
        {buttons.left && (
          <li>
            <b>Left</b> button pressed
          </li>
        )}
        {buttons.middle && (
          <li>
            <b>Middle</b> button pressed
          </li>
        )}
        {buttons.right && (
          <li>
            <b>Right</b> button pressed
          </li>
        )}
      </ul>
    </div>
  );
};

export default Buttons;
