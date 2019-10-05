import { useEffect, useState } from 'react';
import { Mouse } from './types';

const initMouse: Mouse = {
  position: {
    client: { x: null, y: null },
    screen: { x: null, y: null },
    page: { x: null, y: null },
  },
  buttons: {
    left: null,
    middle: null,
    right: null,
  },
};

const useMightyMouse = (elementId?: string): Mouse => {
  const [mouse, setMouse] = useState<Mouse>(initMouse);
  useEffect(() => {
    const onMouseEvent = (event: Event): void => {
      const { clientX, clientY, screenX, screenY, pageX, pageY, buttons } = event as MouseEvent;
      setMouse({
        position: {
          client: { x: clientX, y: clientY },
          screen: { x: screenX, y: screenY },
          page: { x: pageX, y: pageY },
        },
        buttons: {
          left: [1, 3, 5, 7].indexOf(buttons) > -1,
          right: [2, 3, 6, 7].indexOf(buttons) > -1,
          middle: [4, 5, 6, 7].indexOf(buttons) > -1,
        },
      });
    };

    let element: Window | HTMLElement | null = window;
    if (elementId) {
      element = document.getElementById(elementId);
      if (!element) {
        throw new Error(`Element with id="${elementId}" doesn't exists`);
      }
    }
    element.addEventListener('mousedown', onMouseEvent);
    element.addEventListener('mousemove', onMouseEvent);
    element.addEventListener('mouseup', onMouseEvent);

    return (): void => {
      element!.removeEventListener('mousedown', onMouseEvent);
      element!.removeEventListener('mousemove', onMouseEvent);
      element!.removeEventListener('mouseup', onMouseEvent);
    };
  }, []);
  return mouse;
};

export default useMightyMouse;
