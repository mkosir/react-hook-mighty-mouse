import React, { useState } from 'react';

import useMightyMouse from '../../src';
import './EyesFollowTired.demotab.scss';

const EyesFollowTired = () => {
  const [tiredness, setTiredness] = useState(0);
  const {
    selectedElement: {
      position: { angle: angleLeftEye },
    },
  } = useMightyMouse(true, 'left-eye', { x: 45, y: 45 });
  const {
    selectedElement: {
      position: { angle: angleRightEye },
    },
  } = useMightyMouse(true, 'right-eye', { x: 45, y: 45 });

  const redEye =
    (angleLeftEye < 30 || (angleLeftEye < 360 && angleLeftEye > 330)) &&
    angleRightEye > 150 &&
    angleRightEye < 210;
  const styleLeftEye = {
    transform: `rotate(${-angleLeftEye}deg)`,
    backgroundColor: redEye ? '#f8c6c6' : '#f3efef',
    transition: `all ${tiredness}s ease`,
  };
  const styleRightEye = {
    transform: `rotate(${-angleRightEye}deg)`,
    backgroundColor: redEye ? '#f8c6c6' : '#f3efef',
    transition: `all ${tiredness}s ease`,
  };

  return (
    <div className="eyes-follow-tired">
      <div className="container">
        <div className="eyelid" />
        <div className="eyes">
          <div id="left-eye" className="eye" style={styleLeftEye}>
            <div className="pupil" />
          </div>
          <div id="right-eye" className="eye" style={styleRightEye}>
            <div className="pupil" />
          </div>
        </div>
      </div>
      <div className="tiredness">
        <div className="header">Tiredness: {(tiredness * 50).toFixed(0)}%</div>
        <input
          type="range"
          min="0.0"
          max="2.0"
          step="0.001"
          value={tiredness}
          onChange={ev => setTiredness(parseFloat(ev.target.value))}
        />
      </div>
    </div>
  );
};

export default EyesFollowTired;
