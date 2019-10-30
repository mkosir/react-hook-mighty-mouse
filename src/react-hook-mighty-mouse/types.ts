export type Mouse = {
  /*
   * Mouse position
   */
  position: {
    /*
     * Client position - browser rendered content
     */
    client: { x: number | null; y: number | null };
    /*
     * Screen position - monitor
     */
    screen: { x: number | null; y: number | null };
    /*
     * Page position - viewport
     */
    page: { x: number | null; y: number | null };
  };
  /*
   * Mouse buttons
   */
  buttons: {
    left: boolean | null;
    middle: boolean | null;
    right: boolean | null;
  };
  /*
   * Pressed keys
   */
  keyboard: {
    ctrl: boolean | null;
    shift: boolean | null;
    alt: boolean | null;
  };
  eventType: EventType | null;
  selectedElement: SelectedElement;
};

type SelectedElement = {
  /*
   * Mouse relative position to selected element
   */
  position: {
    x: number | null;
    y: number | null;
    angle: number | null;
  };
  /*
   * Bounding rectangle of selected element
   */
  boundingRect: {
    left: number | null;
    top: number | null;
    width: number | null;
    height: number | null;
  };
  /*
   * Mouse over selected element
   */
  isHover: boolean;
};

export type EventType = 'mousemove' | 'touchmove' | 'mousedown' | 'mouseup';
