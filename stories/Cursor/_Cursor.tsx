import React from 'react';

import DocTabTemplate from 'react-doc-tab-template';
import Demo from './Cursor.doctab';

const code = `import React from 'react';

import useMightyMouse from '../../src';
import './Cursor.doctab.scss';
import imgCheese from './img/cheese.png';

const Cursor = () => {
  const {
    position: { client },
  } = useMightyMouse();
  return (
    <div className="cursor">
      <img src={imgCheese} className="cheese" alt="pic" />
      <div id="cursor" style={{ left: client.x, top: client.y }}>
        🐭
      </div>
    </div>
  );
};

export default Cursor;
`;

const style = `.cursor {
  .cheese {
    cursor: none;
    width: 200px;

    &:hover + #cursor {
      display: block;
    }
  }

  #cursor {
    position: absolute;
    display: none;
    pointer-events: none;
  }
}
`;

const _Cursor = () => (
  <DocTabTemplate code={code} style={style} codeExt="tsx" styleExt="scss">
    <Demo />
  </DocTabTemplate>
);

export default _Cursor;
