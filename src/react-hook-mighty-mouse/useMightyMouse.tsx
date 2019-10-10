import { useEffect, useState } from 'react';
import { Mouse } from './types';

const initMouse: Mouse = {
  position: {
    client: { x: null, y: null },
    screen: { x: null, y: null },
    page: { x: null, y: null },
  },
  positionRelative: {
    x: null,
    y: null,
  },
  buttons: {
    left: null,
    middle: null,
    right: null,
  },
  keyboard: {
    ctrl: null,
    shift: null,
    alt: null,
  },
  isHover: false,
};

const useMightyMouse = (elementId?: string): Mouse => {
  const [mouse, setMouse] = useState<Mouse>(initMouse);
  let element: Window | HTMLElement | null = null;

  const onMouseEvent = (event: Event): void => {
    const { clientX, clientY, screenX, screenY, pageX, pageY, buttons } = event as MouseEvent;

    const positionRelative: { x: number | null; y: number | null } = {
      x: null,
      y: null,
    };
    if (elementId) {
      // @ts-ignore
      const clientRect = element!.getBoundingClientRect();
      positionRelative.x = clientX - clientRect.left;
      positionRelative.y = clientY - clientRect.top;
    }

    setMouse(prevState => ({
      ...prevState,
      position: {
        client: { x: clientX, y: clientY },
        screen: { x: screenX, y: screenY },
        page: { x: pageX, y: pageY },
      },
      positionRelative,
      buttons: {
        left: [1, 3, 5, 7].indexOf(buttons) > -1,
        right: [2, 3, 6, 7].indexOf(buttons) > -1,
        middle: [4, 5, 6, 7].indexOf(buttons) > -1,
      },
      isHover: true,
    }));
  };

  const onKeyEvent = (event: Event): void => {
    const { ctrlKey, shiftKey, altKey } = event as MouseEvent;
    setMouse(prevState => ({
      ...prevState,
      keyboard: {
        ctrl: ctrlKey,
        shift: shiftKey,
        alt: altKey,
      },
    }));
  };

  const onMouseLeave = (): void => {
    setMouse(initMouse);
  };

  useEffect(() => {
    element = window;
    if (elementId) {
      element = document.getElementById(elementId);
      if (!element) {
        throw new Error(`Element with id="${elementId}" doesn't exists`);
      }
    }
    element.addEventListener('mousedown', onMouseEvent);
    element.addEventListener('mousemove', onMouseEvent);
    element.addEventListener('mouseup', onMouseEvent);
    element.addEventListener('mouseleave', onMouseLeave);
    element.addEventListener('keydown', onKeyEvent);
    element.addEventListener('keyup', onKeyEvent);

    return (): void => {
      element!.removeEventListener('mousedown', onMouseEvent);
      element!.removeEventListener('mousemove', onMouseEvent);
      element!.removeEventListener('mouseup', onMouseEvent);
      element!.removeEventListener('mouseleave', onMouseLeave);
      element!.removeEventListener('keydown', onKeyEvent);
      element!.removeEventListener('keyup', onKeyEvent);
    };
  }, []);
  return mouse;
};

export default useMightyMouse;
