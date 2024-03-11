export type Rect = Readonly<{
  x: number;
  y: number;
  width: number;
  height: number;
}>;

export const RECT_CORNER = [
  "left-top",
  "left-bottom",
  "right-top",
  "right-bottom",
] as const;
export type RectCorner = (typeof RECT_CORNER)[number];
