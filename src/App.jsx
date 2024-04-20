import Background from "./components/Background/Background";
import Content from "./components/Content/Content";
import TaskBar from "./components/TaskBar/TaskBar";
function App() {
  return (
    <div
      style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}
    >
      <Background />
      <Content />
      <TaskBar />
    </div>
  );
}

export default App;
