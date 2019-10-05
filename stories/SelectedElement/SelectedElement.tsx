import React from 'react';

import useMightyMouse from '../../src';
import './SelectedElement.scss';

const SelectedElement = () => {
  const {
    position: { client },
  } = useMightyMouse('trackElement');
  return (
    <div className="selected-element" id="trackElement">
      Mouse position
      <div className="row">
        x:<div>{client.x}</div>
      </div>
      <div className="row">
        y: <div>{client.y}</div>
      </div>
    </div>
  );
};

export default SelectedElement;
