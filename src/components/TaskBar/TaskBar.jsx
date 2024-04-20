import "./TaskBar.css";
import logoWindows from "./../../assets/logo-windows.png";
import InternetExplorerBoton from "../../common/buttons/btn-internet-explorer/InternetExplorerBoton";
function TaskBar() {
  return (
    <div className="task-bar">
      <button className="btn-home">
        <img src={logoWindows} width="30px" />
        Inicio
      </button>
      <InternetExplorerBoton size="30px" />
    </div>
  );
}

export default TaskBar;
