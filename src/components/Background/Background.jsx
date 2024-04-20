import imageWebp from "./../../assets/background.webp";
import "./Background.css";
function Background() {
  return (
    <div>
      <img className="background-img" src={imageWebp} />
    </div>
  );
}

export default Background;
