import React from 'react';

import DemoTab from 'react-demo-tab';
import Demo from './EyesFollowTired.demotab';

const code = `import React, { useState } from 'react';

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
    transform: \`rotate(\${-angleLeftEye}deg)\`,
    backgroundColor: redEye ? '#f8c6c6' : '#f3efef',
    transition: \`all \${tiredness}s ease\`,
  };
  const styleRightEye = {
    transform: \`rotate(\${-angleRightEye}deg)\`,
    backgroundColor: redEye ? '#f8c6c6' : '#f3efef',
    transition: \`all \${tiredness}s ease\`,
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
`;

const style = `.eyes-follow-tired {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 50vh;

  .container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;

    .eyelid {
      position: absolute;
      width: 220px;
      height: 100px;
      background-color: white;
      z-index: 400;
      top: -120px;
      animation: blink 4.5s infinite ease-in alternate;
      animation-delay: 1s;
    }
    @keyframes blink {
      0% {
        top: -120px;
      }
      95% {
        top: -120px;
      }
      100% {
        top: -50px;
      }
    }

    .eyes {
      position: absolute;
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;

      .eye {
        border-radius: 50%;
        height: 90px;
        width: 90px;
        background-color: #f3efef;

        .pupil {
          position: absolute;
          background-color: #382e25;
          border-radius: 50%;
          width: 18px;
          height: 18px;
          left: 50px;
          top: 35px;
        }
      }
    }
  }

  .tiredness {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 150px;

    .header {
      font-size: 23px;
      margin-bottom: 10px;
      font-style: italic;
    }

    input {
      transform: scale(1.3);
    }
  }
}
`;

const _EyesFollowTired = () => (
  <DemoTab code={code} style={style} codeExt="tsx" styleExt="scss">
    <Demo />
  </DemoTab>
);

export default _EyesFollowTired;
