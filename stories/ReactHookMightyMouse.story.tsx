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
  .add('Relative Position', () => <SelectedElement />)
  .add('Relative Position - Cheese', () => <RelativePosition />)
  .add('Mouse Buttons', () => <Buttons />)
  .add('Mouse Over Selected Element', () => <MouseHover />)
  .add('Cursor', () => <Cursor />)
  .add('Keyboard', () => <Keyboard />)
  .add('Mouse & Cheese', () => <CursorOnSelectedElement />);
