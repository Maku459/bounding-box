import { Matrix, compose, identity } from "transformation-matrix";

import { toMatrix } from "../coord/Coord";

import { findLayerPathById } from "./findLayerById";
import { Layer } from "./Layer";

export const getLayerWithMatrix = (root: Layer, layerId: string) => {
  const path = findLayerPathById(root, layerId);
  if (!path) return;
  const layer = path[path.length - 1];
  if (!layer) return;

  const matrix = path.reduce((acc, layer) => {
    return compose(acc, toMatrix(layer.coord));
  }, identity());

  return { matrix, layer };
};
