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
        <br></br>
        <h2>
          Autor: Diego Carreón Aguirre (A01747352)
        </h2>
        <br></br>
        <ListaTareas />
      </div>
    </ProveedorTarea>
  );
}

export default App;
