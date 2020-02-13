import React from 'react';

import useMightyMouse from '../../src';
import './Default.demotab.scss';

const Default = () => {
  const {
    position: { client },
  } = useMightyMouse();
  return (
    <div className="default">
      Mouse position
      <div className="row">
        x: <div>{client.x && client.x.toFixed(0)}</div>
      </div>
      <div className="row">
        y: <div>{client.y && client.y.toFixed(0)}</div>
      </div>
    </div>
  );
};

export default Default;
