import iconSound from "../../../assets/icon-sound.png";
import "./SoundBoton.css";
function SoundBoton() {
  return (
    <button className="sound-boton">
      <img src={iconSound} width="20px" />
    </button>
  );
}

export default SoundBoton;
