import { atom } from "jotai";

// import { findLayerById, findLayerParentById } from "../layer/findLayerById";
import { Layer, createLayer } from "../layer/Layer";
import { sampleLayer } from "../layer/sampleLayer";

type LayerProps = Omit<Layer, "id">;

const version = atom(0);
const layerTreeBaseAtom = atom<Layer>(sampleLayer);

export const layerTreeAtom = atom((get) => {
  get(version);
  return get(layerTreeBaseAtom);
});

export const addLayerAction = atom(undefined, (get, set, props: LayerProps) => {
  const parent = get(layerTreeBaseAtom);
  if (!parent) {
    return;
  }

  parent.children.push({ ...createLayer(props), children: [] });
  set(version, get(version) + 1);

  console.log(parent);
});
