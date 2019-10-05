import React from 'react';

import useMightyMouse from '../../src';
import './Default.scss';

const Default = () => {
  const {
    position: { client },
  } = useMightyMouse();
  return (
    <div className="default">
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

export default Default;
