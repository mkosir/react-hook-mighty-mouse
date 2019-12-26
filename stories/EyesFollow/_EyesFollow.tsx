import React from 'react';

import StoryTabTemplate from 'story-tab-react';
import Demo from './EyesFollow.storytab';

const code = `import React from 'react';

import useMightyMouse from '../../src';
import './EyesFollow.storytab.scss';

const EyesFollow = () => {
  const {
    selectedElement: {
      position: { angle: angleLeftEye },
    },
  } = useMightyMouse(true, 'left-eye', { x: 20, y: 20 });
  const {
    selectedElement: {
      position: { angle: angleRightEye },
    },
  } = useMightyMouse(true, 'right-eye', { x: 20, y: 20 });

  const rotateLeftEye = \`rotate(\${-angleLeftEye}deg)\`;
  const rotateRightEye = \`rotate(\${-angleRightEye}deg)\`;

  return (
    <div className="eyes-follow">
      <div className="eyes">
        <div id="left-eye" className="eye" style={{ transform: rotateLeftEye }}>
          <div className="pupil" />
        </div>
        <div id="right-eye" className="eye" style={{ transform: rotateRightEye }}>
          <div className="pupil" />
        </div>
      </div>
    </div>
  );
};

export default EyesFollow;
`;

const style = `.eyes-follow {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 50vh;

  .eyes {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    .eye {
      border-radius: 50%;
      height: 40px;
      width: 40px;
      background: #f3efef;

      .pupil {
        background: #382e25;
        border-radius: 50%;
        position: absolute;
        width: 15px;
        height: 15px;
        left: 25px;
        top: 12px;
      }
    }
  }
}
`;

const _EyesFollow = () => (
  <StoryTabTemplate code={code} style={style} codeExt="tsx" styleExt="scss">
    <Demo />
  </StoryTabTemplate>
);

export default _EyesFollow;