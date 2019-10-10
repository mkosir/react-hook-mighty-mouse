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
   * Relative mouse position
   */
  positionRelative: {
    x: number | null;
    y: number | null;
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
  /*
   * Mouse over selected element
   */
  isHover: boolean;
};
