import { Matrix, compose, decomposeTSR } from "transformation-matrix";

import { applyMatrix, identityMatrix, toMatrix } from "../coord/Coord";

import { DrawOption } from "./DrawOption";
import { Layer } from "./Layer";

const drawLayerImpl = (
  ctx: CanvasRenderingContext2D,
  layer: Layer,
  matrix: Matrix,
  options: DrawOption
) => {
  const selfMatrix = compose(matrix, toMatrix(layer.coord));
  ctx.save();

  applyMatrix(ctx, selfMatrix);
  // const tr = decomposeTSR(selfMatrix);
  // const scale = tr.scale.sx;
  // const unit = DPR / scale;

  // const focused = options.focusId === layer.id;
  // const selected = options.selectedId === layer.id;

  //drawlayerBg(ctx, layer, unit, isRoot, selected);

  // if (focused && !selected) {
  //   ctx.strokeStyle = "#7799a8";
  //   ctx.setLineDash([unit * 2, unit * 2]);
  //   ctx.lineWidth = DPR / scale;
  //   const rect = expandRect({ ...P_ZERO, ...layer.size }, unit * 2);
  //   ctx.strokeRect(rect.x, rect.y, rect.width, rect.height);
  // }

  layer.children.forEach((child) => {
    drawLayerImpl(ctx, child, selfMatrix, options, false);
  });

  ctx.restore();
};

export const drawLayer = (
  ctx: CanvasRenderingContext2D,
  layer: Layer,
  options: DrawOption = {}
) => {
  drawLayerImpl(ctx, layer, identityMatrix, options, true);
  // if (options.selectedId) {
  //   drawBoundingBox(ctx, layer, options.selectedId);
  // }
};
