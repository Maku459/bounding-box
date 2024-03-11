import { atom, useAtom, useSetAtom } from "jotai";

// import { findLayerById } from "../layer/findLayerById";
import { createLayer } from "../layer/Layer";
// import { drawPartyAtom } from "../state/drawOptionState";
import { addLayerAction, layerTreeAtom } from "../state/layerTreeState";
// import { pointerStateAtom } from "../state/pointerState";
// import { captureCanvas } from "../utils/captureCanvas";
// import { randomBetween } from "../utils/randomBetween";

// import { BaseButton } from "./Button";

const addNewLayerAction = atom(undefined, (get, set) => {
  const size = {
    width: 100,
    height: 100,
  };

  const position = {
    x: 300,
    y: 300,
  };

  set(
    addLayerAction,
    createLayer({
      size,
      coord: {
        position,
        scale: 1,
        angle: 0,
      },
      color: "silver",
    })
  );
});

export const ControlBar = () => {
  const addLayer = useSetAtom(addNewLayerAction);

  return (
    <div className="fixed top-0 h-16 flex p-2 bg-[#7399d4] w-full">
      <button onClick={addLayer}>Add BoundingBox</button>
    </div>
  );
};
