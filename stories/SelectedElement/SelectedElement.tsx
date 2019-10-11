import React from 'react';

import useMightyMouse from '../../src';
import './SelectedElement.scss';

const SelectedElement = () => {
  const {
    position: { client },
    positionRelative: { x, y },
  } = useMightyMouse(true, 'trackElement');
  return (
    <div className="selected-element" id="trackElement">
      <div className="position">
        <div className="header">Position</div>
        <div className="row">
          x: <div>{client.x}</div>
        </div>
        <div className="row">
          y: <div>{client.y}</div>
        </div>
      </div>
      <div className="position">
        <div className="header">Relative Position</div>
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

export default SelectedElement;
