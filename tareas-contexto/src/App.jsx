import "./App.css";
import { BiTask } from "react-icons/bi";
import ListaTareas from "./components/ListaTareas";
import ProveedorTarea from "./components/ProveedorTarea";

function App() {
  return (
    <ProveedorTarea>
      {" "}
      <div className="App">
        <h1>
          Lista de tareas <BiTask />
        </h1>
        <ListaTareas />
      </div>
    </ProveedorTarea>
  );
}

export default App;
