import React from 'react';
import { storiesOf } from '@storybook/react';

import Default from './Default/_Default';
import Positions from './Positions/_Positions';
import RelativePosition from './RelativePosition/_RelativePosition';
import RelativePositionImage from './RelativePositionImage/_RelativePositionImage';
import MouseAngle from './MouseAngle/_MouseAngle';
import Buttons from './Buttons/_Buttons';
import MouseHover from './MouseHover/_MouseHover';
import Cursor from './Cursor/_Cursor';
import Keyboard from './Keyboard/_Keyboard';
import MouseCheese from './MouseCheese/_MouseCheese';
import EyesFollow from './EyesFollow/_EyesFollow';
import EyesFollowTired from './EyesFollowTired/_EyesFollowTired';
import Flashlight from './Flashlight/_Flashlight';
import './ReactHookMightyMouse.scss';

const stories = storiesOf('React Mighty Mouse', module);

stories
  .add('Default', () => <Default />)
  .add('Positions', () => <Positions />)
  .add('Relative Position', () => <RelativePosition />)
  .add('Relative Position - Image', () => <RelativePositionImage />)
  .add('Mouse Angle', () => <MouseAngle />)
  .add('Mouse Buttons', () => <Buttons />)
  .add('Mouse Over Selected Element', () => <MouseHover />)
  .add('Cursor', () => <Cursor />)
  .add('Keyboard', () => <Keyboard />)
  .add('Mouse & Cheese', () => <MouseCheese />)
  .add('Eyes Follow', () => <EyesFollow />)
  .add('Eyes Follow - Tired', () => <EyesFollowTired />)
  .add('Flashlight', () => <Flashlight />);
