import React from 'react';
import { storiesOf } from '@storybook/react';

import Default from './Default/_StorybookTabs';
import Positions from './Positions/_StorybookTabs';
import RelativePosition from './RelativePosition/_StorybookTabs';
import SelectedElement from './SelectedElement/_StorybookTabs';
import Buttons from './Buttons/_StorybookTabs';
import MouseHover from './MouseHover/_StorybookTabs';
import Cursor from './Cursor/_StorybookTabs';
import CursorOnSelectedElement from './CursorOnSelectedElement/_StorybookTabs';
import Keyboard from './Keyboard/_StorybookTabs';
import './ReactHookMightyMouse.scss';

const stories = storiesOf('React Mighty Mouse', module);

stories
  .add('Default', () => <Default />)
  .add('Positions', () => <Positions />)
  .add('Relative Position', () => <RelativePosition />)
  .add('Selected Element', () => <SelectedElement />)
  .add('Mouse Buttons', () => <Buttons />)
  .add('Mouse Hover', () => <MouseHover />)
  .add('Cursor', () => <Cursor />)
  .add('Cursor On Selected Element', () => <CursorOnSelectedElement />)
  .add('Keyboard', () => <Keyboard />);
