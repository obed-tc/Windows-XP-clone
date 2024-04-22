import { useState } from "react";
import Background from "./components/Background/Background";
import Content from "./components/Content/Content";
import TaskBar from "./components/TaskBar/TaskBar";
import { useEffect } from "react";
import LoadingPage from "./pages/LoadingPage/LoadingPage";
function App() {
  const power = localStorage.getItem("power");
  const [start, setStart] = useState(power ? true : false);
  useEffect(() => {
    const timeout = setTimeout(() => {
      setStart(true);
      localStorage.setItem("power", "true");
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
      ) : (
        <LoadingPage />
      )}
    </>
  );
}

export default App;
