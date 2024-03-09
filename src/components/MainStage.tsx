import { useFullCanvas } from "../hooks/useFullCanvas";

export const MainStage = () => {
  const stage = useFullCanvas();

  return (
    <div className="w-full h-full absolute top-0 left-0">{stage.element}</div>
  );
};
