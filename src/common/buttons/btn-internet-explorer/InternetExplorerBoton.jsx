/* eslint-disable react/prop-types */
import iconInternetExplorer from "../../../assets/icon-internet-explorer.png";
import "./InternetExplorerBoton.css";
function InternetExplorerBoton({ size, showTitle }) {
  return (
    <button className="btn-internet-explorer">
      <img src={iconInternetExplorer} width={size} alt="" />
      {showTitle && <label>Internet explorer</label>}
    </button>
  );
}

export default InternetExplorerBoton;
