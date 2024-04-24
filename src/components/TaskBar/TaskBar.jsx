import "./TaskBar.css";
import logoWindows from "./../../assets/logo-windows.png";
import InternetExplorerBoton from "../../common/buttons/btn-internet-explorer/InternetExplorerBoton";
import ClockBoton from "../../common/buttons/btn-clock/ClockBoton";
import SoundBoton from "../../common/buttons/btn-sound/SoundBoton";
function TaskBar() {
  return (
    <div className="task-bar">
      <div
        style={{
          display: "flex",
          padding: "0",
          height: "100%",
          alignItems: "center",
        }}
      >
        <button className="btn-home">
          <img src={logoWindows} width="30px" />
          Inicio
        </button>
        <InternetExplorerBoton size="30px" />
      </div>

      <div className="task-bar-end">
        <SoundBoton />
        <ClockBoton />
      </div>
    </div>
  );
}

export default TaskBar;
