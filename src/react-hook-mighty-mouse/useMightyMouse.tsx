import { useEffect, useState } from 'react';
import { Mouse, EventType } from './types';

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

const useMightyMouse = (touchEnabled: boolean = true, elementId?: string): Mouse => {
  const [mouse, setMouse] = useState<Mouse>(initMouse);
  let selectedEl: HTMLElement | null = null;

  const onMouseTouchEvent = (event: Event): void => {
    let clientX: number;
    let clientY: number;
    let screenX: number;
    let screenY: number;
    let pageX: number;
    let pageY: number;
    let buttons: {
      left: boolean | null;
      middle: boolean | null;
      right: boolean | null;
    } = { left: null, middle: null, right: null };

    switch (event.type as EventType) {
      case 'mousemove':
      case 'mousedown':
      case 'mouseup':
        const mouseEvent = event as MouseEvent;
        clientX = mouseEvent.clientX;
        clientY = mouseEvent.clientY;
        screenX = mouseEvent.screenX;
        screenY = mouseEvent.screenY;
        pageX = mouseEvent.pageX;
        pageY = mouseEvent.pageY;
        buttons.left = [1, 3, 5, 7].indexOf(mouseEvent.buttons) > -1;
        buttons.right = [2, 3, 6, 7].indexOf(mouseEvent.buttons) > -1;
        buttons.middle = [4, 5, 6, 7].indexOf(mouseEvent.buttons) > -1;
        break;
      case 'touchmove':
        const { touches } = event as TouchEvent;
        const touchEvent = touches[0];
        clientX = touchEvent.clientX;
        clientY = touchEvent.clientY;
        screenX = touchEvent.screenX;
        screenY = touchEvent.screenY;
        pageX = touchEvent.pageX;
        pageY = touchEvent.pageY;
        break;
      default:
        throw new Error(`Unknown event triggered "${event.type}"`);
    }

    const positionRelative: { x: number | null; y: number | null } = {
      x: null,
      y: null,
    };
    if (selectedEl) {
      const clientRect = selectedEl.getBoundingClientRect();
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
      buttons,
    }));
  };

  const onLeave = (): void => {
    setMouse(initMouse);
  };

  const onSelectedElementEnter = (): void => {
    setMouse(prevState => ({
      ...prevState,
      isHover: true,
    }));
  };

  const onSelectedElementLeave = (): void => {
    setMouse(prevState => ({
      ...prevState,
      isHover: false,
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

  useEffect(() => {
    if (elementId) {
      selectedEl = document.getElementById(elementId);
      if (!selectedEl) {
        throw new Error(`Element with id="${elementId}" doesn't exists`);
      }
      selectedEl.addEventListener('mouseenter', onSelectedElementEnter);
      selectedEl.addEventListener('mouseleave', onSelectedElementLeave);
    }
    document.addEventListener('mousemove', onMouseTouchEvent);
    document.addEventListener('mousedown', onMouseTouchEvent);
    document.addEventListener('mouseup', onMouseTouchEvent);
    document.addEventListener('mouseleave', onLeave);
    document.addEventListener('keydown', onKeyEvent);
    document.addEventListener('keyup', onKeyEvent);
    if (touchEnabled) {
      window.addEventListener('touchmove', onMouseTouchEvent);
      window.addEventListener('touchend', onLeave);
    }

    return (): void => {
      document.removeEventListener('mousemove', onMouseTouchEvent);
      document.removeEventListener('mousedown', onMouseTouchEvent);
      document.removeEventListener('mouseup', onMouseTouchEvent);
      document.removeEventListener('mouseleave', onLeave);
      document.removeEventListener('keydown', onKeyEvent);
      document.removeEventListener('keyup', onKeyEvent);
      if (touchEnabled) {
        window.removeEventListener('touchmove', onMouseTouchEvent);
        window.removeEventListener('touchend', onLeave);
      }
    };
  }, []);
  return mouse;
};

export default useMightyMouse;
