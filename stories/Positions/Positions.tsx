import React from 'react';

import useMightyMouse from '../../src';
import './Positions.scss';

const Positions = () => {
  const {
    position: { client, page, screen },
  } = useMightyMouse();
  return (
    <div className="positions">
      Mouse position
      <div className="position">
        <div>Client (browser rendered content)</div>
        <div className="row">
          x:<div>{client.x}</div>
        </div>
        <div className="row">
          y: <div>{client.y}</div>
        </div>
      </div>
      <div className="position">
        Page (viewport)
        <div className="row">
          x:<div>{page.x}</div>
        </div>
        <div className="row">
          y: <div>{page.y}</div>
        </div>
      </div>
      <div className="position">
        Screen (monitor)
        <div className="row">
          x:<div>{screen.x}</div>
        </div>
        <div className="row">
          y: <div>{screen.y}</div>
        </div>
      </div>
    </div>
  );
};

export default Positions;
