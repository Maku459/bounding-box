import useElementSize from "./useElementSize";
import { useEffect, useRef } from "react";
import { DPR } from "../coord/DPR";
import { Size } from "../coord/Size";

const setCanavasSize = (canvas: HTMLCanvasElement, size: Size) => {
  canvas.width = size.width * DPR;
  canvas.height = size.height * DPR;
};

export const useFullCanvas = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const canvasSize = useElementSize(canvasRef);

  const canvas = canvasRef.current;
  const ctx = canvas?.getContext("2d") ?? undefined;

  useEffect(() => {
    if (!canvas) return;
    setCanavasSize(canvas, canvasSize);
  }, [canvas, canvasSize]);

  const element = (
    <canvas
      ref={canvasRef}
      className="w-full h-full top-0 left-0 border-t-[1px] border-[#aaaaaa]"
    ></canvas>
  );
  return { element, ctx, size: canvasSize };
};
