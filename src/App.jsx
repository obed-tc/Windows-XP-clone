import { useState } from "react";
import Background from "./components/Background/Background";
import Content from "./components/Content/Content";
import TaskBar from "./components/TaskBar/TaskBar";
import { useEffect } from "react";
import LoadingPage from "./pages/LoadingPage/LoadingPage";
import WelcomePage from "./pages/welcomePage/WelcomePage";
function App() {
  const power = localStorage.getItem("power");
  const [start, setStart] = useState(power ? true : false);
  const [welcome, setWelcome] = useState(false);

  const playSound = () => {
    const audio = new Audio("./assets/start-sound.mp3");
    audio.play();
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      setWelcome(true);

      setTimeout(() => {
        setStart(true);
        playSound();
        localStorage.setItem("power", "true");
      }, 5000);
    }, 10000);
    return () => clearTimeout(timeout);
  }, []);
  return (
    <>
      {start ? (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            minHeight: "100vh",
          }}
        >
          <Background />
          <Content />
          <TaskBar />
        </div>
      ) : welcome ? (
        <WelcomePage />
      ) : (
        <LoadingPage />
      )}
    </>
  );
}

export default App;
