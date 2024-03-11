import { MainStage } from "./components/MainStage";
import { ControlBar } from "./components/ControlBar";

function App() {
  return (
    <>
      <ControlBar />
      <div className="relative">
        <MainStage />
      </div>
    </>
  );
}

export default App;
