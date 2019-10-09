export type Mouse = {
  position: {
    client: { x: number | null; y: number | null };
    screen: { x: number | null; y: number | null };
    page: { x: number | null; y: number | null };
  };
  positionRelative: {
    x: number | null;
    y: number | null;
  };
  buttons: {
    left: boolean | null;
    middle: boolean | null;
    right: boolean | null;
  };
  isHover: boolean;
};
