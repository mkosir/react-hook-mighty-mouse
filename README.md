# react-hook-mighty-mouse ![Mighty Mouse](mighty-mouse.png)

[![npm version][npm-badge]][npm-url]
[![npm bundle size][size-badge]][npm-url]
[![Build Status][build-badge]][build-url]

_React hook that tracks mouse events on selected element._

## Demo

**[Live demo](https://mkosir.github.io/react-hook-mighty-mouse)**

## Install

- npm `npm install react-hook-mighty-mouse`
- yarn `yarn add react-hook-mighty-mouse`

## Features

- Zero dependencies
- Track mouse positions - client/page/screen [🔗demo](https://mkosir.github.io/react-hook-mighty-mouse/?path=/story/react-hook-mighty-mouse--positions)
- Track mouse buttons [🔗demo](https://mkosir.github.io/react-hook-mighty-mouse/?path=/story/react-hook-mighty-mouse--mouse-buttons)
- Track mouse events only on selected element [🔗demo](https://mkosir.github.io/react-hook-mighty-mouse/?path=/story/react-hook-mighty-mouse--selected-element)

## Example

```jsx
import React from 'react';
import useMightyMouse from 'react-hook-mighty-mouse';

const App = () => {
  const { position } = useMightyMouse();
  return (
    <div>
      Mouse position x:{position.client.x} y:{position.client.y}
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
```

## Hook

> ▶︎ indicates the default value if there's one

```js
useMightyMouse(elementId?: string): Mouse
```

_Input_  
**elementId**: _string_ ▶︎ `window (object)`  
Selected element id.

_Output_  
_**Mouse** = {  
&nbsp;&nbsp;**position**: {  
&nbsp;&nbsp;&nbsp;&nbsp;**client**: { x: number | null; y: number | null };  
&nbsp;&nbsp;&nbsp;&nbsp; **screen**: { x: number | null; y: number | null };  
&nbsp;&nbsp;&nbsp;&nbsp;**page**: { x: number | null; y: number | null };  
&nbsp;&nbsp;};  
&nbsp;&nbsp;**buttons**: {  
&nbsp;&nbsp;&nbsp;&nbsp;**left**: boolean | null;  
&nbsp;&nbsp;&nbsp;&nbsp;**middle**: boolean | null;  
&nbsp;&nbsp;&nbsp;&nbsp;**right**: boolean | null;  
&nbsp;&nbsp;};  
}_

## Development

_Easily set up a local development environment!_

Build all the examples and starts storybook server on [localhost:9009](http://localhost:9009):

- clone
- `npm install`
- `npm start`

OR

Clone this repo on your machine, navigate to its location in the terminal and run:

```bash
npm install
npm link # link your local repo to your global packages
npm run build:watch # build the files and watch for changes
```

Clone project repo that you wish to test with react-hook-mighty-mouse library and run:

```bash
npm install
npm link react-hook-mighty-mouse # link your local copy into this project's node_modules
npm start
```

**Start coding!** 🎉

## Contributing

All contributions are welcome!

## Roadmap

- Add mouse angle 0-360° (relative to selected element)
- Add throttle parameter (hook "updating")
- Add tests

[npm-url]: https://www.npmjs.com/package/react-hook-mighty-mouse
[npm-badge]: https://img.shields.io/npm/v/react-hook-mighty-mouse.svg
[size-badge]: https://img.shields.io/bundlephobia/minzip/react-hook-mighty-mouse.svg
[build-badge]: https://travis-ci.com/mkosir/react-hook-mighty-mouse.svg
[build-url]: https://travis-ci.com/mkosir/react-hook-mighty-mouse
