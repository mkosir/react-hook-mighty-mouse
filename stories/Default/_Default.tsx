import React from 'react';

import StoryTabTemplate from 'story-tab-template-react';
import Demo from './Default.storytab';

const code = `import React from 'react';

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
        x: <div>{client.x && client.x.toFixed(0)}</div>
      </div>
      <div className="row">
        y: <div>{client.y && client.y.toFixed(0)}</div>
      </div>
    </div>
  );
};

export default Default;
`;

const style = `.default {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 2px solid black;
  border-radius: 8px;
  padding: 10px;
  font-size: 23px;

  .row {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    font-size: 0.8em;
    margin-top: 10px;
    min-width: 50px;
  }
}
`;

const _Default = () => (
  <StoryTabTemplate code={code} style={style} codeExt="tsx" styleExt="scss">
    <Demo />
  </StoryTabTemplate>
);

export default _Default;
