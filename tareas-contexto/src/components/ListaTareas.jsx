import { useContext } from "react";
import CapturaTarea from "./CapturaTarea";
import Tarea from "./Tarea";
import { ContextoTarea } from "./ProveedorTarea";

const ListaTareas = () => {
  const [arrTareas] = useContext(ContextoTarea);

  return (
    <div className="lista-tareas">
      <CapturaTarea />
      {arrTareas.length === 0 ? (
        <p className="lista-vacia">No hay tareas. ¡Agrega una!</p>
      ) : (
        arrTareas.map((tarea) => (
          <Tarea tarea={tarea} key={tarea.id} />
        ))
      )}
    </div>
  );
};

export default ListaTareas;
