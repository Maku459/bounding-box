import { Layer } from "../Layer";
import { getLayerWithMatrix } from "../toLocal";

export const drawBoundingBox = (
  ctx: CanvasRenderingContext2D,
  root: Layer,
  layerId: string
) => {
  const found = getLayerWithMatrix(root);
  if (!found) return;
  const { matrix, layer } = found;
  const canvasMatrix = compose(identityMatrix, matrix);
  const tr = decomposeTSR(canvasMatrix);
  const scale = tr.scale.sx;

  ctx.save();
  applyMatrix(ctx, canvasMatrix);
  ctx.restore();
};
