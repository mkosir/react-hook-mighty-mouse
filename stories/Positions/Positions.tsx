import React from 'react';

import useMightyMouse from '../../src';
import './Positions.scss';

const Positions = () => {
  const {
    position: { client, page, screen },
  } = useMightyMouse();
  return (
    <div className="positions">
      Mouse positions
      <div className="position">
        <div>Client (browser rendered content)</div>
        <div className="row">
          x: <div>{client.x && client.x.toFixed(0)}</div>
        </div>
        <div className="row">
          y: <div>{client.y && client.y.toFixed(0)}</div>
        </div>
      </div>
      <div className="position">
        Page (viewport)
        <div className="row">
          x: <div>{page.x && page.x.toFixed(0)}</div>
        </div>
        <div className="row">
          y: <div>{page.y && page.y.toFixed(0)}</div>
        </div>
      </div>
      <div className="position">
        Screen (monitor)
        <div className="row">
          x: <div>{screen.x && screen.x.toFixed(0)}</div>
        </div>
        <div className="row">
          y: <div>{screen.y && screen.y.toFixed(0)}</div>
        </div>
      </div>
    </div>
  );
};

export default Positions;
