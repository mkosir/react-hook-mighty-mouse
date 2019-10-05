import React from 'react';
import { storiesOf } from '@storybook/react';

import Default from './Default/_StorybookTabs';
import Positions from './Positions/_StorybookTabs';
import SelectedElement from './SelectedElement/_StorybookTabs';
import Buttons from './Buttons/_StorybookTabs';
import Cursor from './Cursor/_StorybookTabs';
import './ReactHookMightyMouse.scss';

const stories = storiesOf('React Hook Mighty Mouse', module);

stories
  .add('Default', () => <Default />)
  .add('Positions', () => <Positions />)
  .add('Selected Element', () => <SelectedElement />)
  .add('Mouse Buttons', () => <Buttons />)
  .add('Cursor', () => <Cursor />);
