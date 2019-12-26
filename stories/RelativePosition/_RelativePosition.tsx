import React from 'react';

import StoryTabTemplate from 'story-tab-template-react';
import Demo from './RelativePosition.storytab';

const code = `import React from 'react';

import useMightyMouse from '../../src';
import './RelativePosition.scss';

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
`;

const style = `.relative-position {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 2px solid black;
  border-radius: 5px;
  padding: 20px;

  .position {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 23px;
    &:nth-child(2) {
      margin-top: 20px;
    }

    .header {
      font-size: 1em;
      text-decoration: underline;
    }

    .row {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      font-size: 0.8em;
      margin-top: 10px;
      min-width: 60px;
    }
  }
}
`;

const _RelativePosition = () => (
  <StoryTabTemplate code={code} style={style} codeExt="tsx" styleExt="scss">
    <Demo />
  </StoryTabTemplate>
);

export default _RelativePosition;
