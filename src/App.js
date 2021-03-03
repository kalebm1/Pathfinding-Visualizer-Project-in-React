import logo from "./logo.svg";
import "./App.css";
import PathfindingVisualizer from "./PathfindingVisualizer/PathfindingVisualizer";
import NavBar from "./components/NavBar/NavBar";

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <PathfindingVisualizer></PathfindingVisualizer>
    </div>
  );
}

export default App;
