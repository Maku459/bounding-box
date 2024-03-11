import { Point } from "./Point";

export type Coord = Readonly<{
  position: Point;
  scale: number;
  angle: number;
  anchor?: Point;
}>;

export const toMatrix = (coord: Coord) => {
  const ax = coord.anchor?.x ?? 0;
  const ay = coord.anchor?.y ?? 0;
  return compose(
    translate(coord.position.x, coord.position.y),
    rotateDEG(coord.angle, ax, ay),
    scale(coord.scale, coord.scale, ax, ay)
  );
};
