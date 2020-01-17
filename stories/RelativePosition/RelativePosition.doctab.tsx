import React from 'react';

import useMightyMouse from '../../src';
import './RelativePosition.doctab.scss';

const RelativePosition = () => {
  const {
    position: { client },
    selectedElement: {
      position: { x, y },
    },
  } = useMightyMouse(true, 'trackElement');
  return (
    <div className="relative-position" id="trackElement">
      <div className="position">
        <div className="header">Position</div>
        <div className="row">
          x: <div>{client.x && client.x.toFixed(0)}</div>
        </div>
        <div className="row">
          y: <div>{client.y && client.y.toFixed(0)}</div>
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

export default RelativePosition;
