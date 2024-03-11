import { useAtomValue } from "jotai";

import { layerTreeAtom } from "../state/layerTreeState";
import { drawBgCheck } from "../canvasUtils/drawBgCheck";
import { drawLayer } from "../layer/drawLayer";

export const wrapCtx = (ctx: CanvasRenderingContext2D, fn: () => void) => {
  ctx.save();
  fn();
  ctx.restore();
};

/**
 * Canvas描画の入り口になるhook
 * 何らかの状態変更があると、このhookが再レンダリングされる
 */
export const useDrawStage = (ctx?: CanvasRenderingContext2D) => {
  // 全レイヤーのツリー情報
  const root = useAtomValue(layerTreeAtom);
  // 選択やフォーカスといった描画に必要な付加情報
  // const options = useAtomValue(drawOptionAtom);

  if (!ctx) return;

  const draw = () => {
    wrapCtx(ctx, () => {
      ctx.resetTransform();
      // 背景のチェックボックスを描画
      drawBgCheck(ctx);
      // 描画関数本体の呼び出し
      drawLayer(ctx, root);
    });
  };

  draw();
};
