import React from 'react';

import StoryTabTemplate from 'story-tab-template-react';
import Demo from './MouseCheese.storytab';

const code = `import React from 'react';

import useMightyMouse from '../../src';
import './MouseCheese.scss';
import imgCheese from './img/cheese.png';

const MouseCheese = () => {
  const {
    position: { client },
    selectedElement: {
      position: { x, y, angle },
      boundingRect,
      isHover,
    },
    buttons,
    keyboard,
  } = useMightyMouse(true, 'cheese', { x: 125, y: 70 });

  return (
    <div className="mouse-cheese">
      <img src={imgCheese} id="cheese" alt="pic" />
      <div id="cursor" style={{ left: client.x, top: client.y }}>
        🐭
      </div>
      <div className="pos">
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
          <div className="row">angle: {angle && <div>{angle.toFixed(0)}°</div>}</div>
        </div>
      </div>
      <div className="size">
        <div className="header">Cheese</div>
        <div className="columns">
          <div className="col-size-1">
            <div className="row">
              Width: <div>{boundingRect.width && boundingRect.width.toFixed(0)}</div>
            </div>
            <div className="row">
              Height: <div>{boundingRect.height && boundingRect.height.toFixed(0)}</div>
            </div>
          </div>
          <div className="col-size-2">
            <div className="row">
              Left: <div>{boundingRect.left && boundingRect.left.toFixed(0)}</div>
            </div>
            <div className="row">
              Top: <div>{boundingRect.top && boundingRect.top.toFixed(0)}</div>
            </div>
          </div>
        </div>
      </div>
      <div className="mouse-hover">
        <div className="header">Hovering Over Cheese</div>
        <div className="row">{isHover ? <b>Yes 🧀</b> : 'No'}</div>
      </div>
      <div className="main-row-2">
        <div className="col">
          <div className="header">Mouse buttons 🖱️</div>
          <div className="buttons">
            <div className="btn-row1">
              <div>{buttons.left ? <b>Left 👇</b> : 'Left'}</div>
              <div>{buttons.middle ? <b>Middle 👇</b> : 'Middle'}</div>
              <div>{buttons.right ? <b>Right 👇</b> : 'Right'}</div>
            </div>
            <div className="btn-row2">
              <div>{buttons.wheelDown ? <b>Wheel Down 👇</b> : 'Wheel Down'}</div>
              <div>{buttons.wheelUp ? <b>Wheel Up 👆</b> : 'Wheel Up'}</div>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="header">Pressed keys ⌨️</div>
          <div className="keys">
            <div>{keyboard.ctrl ? <b>Ctrl 👇</b> : 'Ctrl'}</div>
            <div>{keyboard.shift ? <b>Shift 👇</b> : 'Shift'}</div>
            <div>{keyboard.alt ? <b>Alt 👇</b> : 'Alt'}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MouseCheese;
`;

const style = `.mouse-cheese {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 18px;

  img {
    cursor: none;
    width: 250px;

    &:hover + #cursor {
      display: block;
    }
  }

  #cursor {
    position: absolute;
    display: none;
    pointer-events: none;
  }

  .pos {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: 2px solid black;
    border-radius: 8px;
    padding: 5px;
    width: 180px;
    margin-top: 30px;

    .position {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      margin: 0;
      &:nth-child(2) {
        margin-top: 10px;
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
        font-size: 0.85em;
        margin-top: 5px;
        min-width: 60px;
      }
    }
  }

  .size {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: 2px solid black;
    border-radius: 8px;
    padding: 5px;
    width: 180px;
    margin-top: 5px;

    .header {
      font-size: 1em;
      text-decoration: underline;
    }

    .columns {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;

      .col-size-1 {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin-right: 5px;

        .row {
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          align-items: center;
          font-size: 0.85em;
          margin-top: 5px;
          min-width: 78px;
        }
      }

      .col-size-2 {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        .row {
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          align-items: center;
          font-size: 0.85em;
          margin-top: 5px;
          min-width: 60px;
        }
      }
    }
  }

  .mouse-hover {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: 2px solid black;
    border-radius: 8px;
    padding: 5px;
    margin-top: 5px;

    .header {
      font-size: 1em;
      text-decoration: underline;
    }
    .row {
      font-size: 0.9em;
      margin-top: 4px;
      color: rgb(236, 189, 59);
      line-height: 20px;
    }
  }

  .main-row-2 {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-top: 5px;

    .col {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      border: 2px solid black;
      border-radius: 8px;
      padding: 5px;
      margin: 0px 5px;
      min-width: 210px;

      .header {
        font-size: 1em;
        text-decoration: underline;
      }

      .buttons {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        margin-top: 5px;
        font-size: 0.85em;
        line-height: 20px;
        padding-left: 20px;

        .btn-row1 {
          min-width: 80px;
        }
        .btn-row2 {
          min-width: 120px;
        }
      }

      .keys {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        margin-top: 5px;
        font-size: 0.85em;
        line-height: 20px;
      }
    }
  }
}
`;

const _MouseCheese = () => (
  <StoryTabTemplate code={code} style={style} codeExt="tsx" styleExt="scss">
    <Demo />
  </StoryTabTemplate>
);

export default _MouseCheese;
