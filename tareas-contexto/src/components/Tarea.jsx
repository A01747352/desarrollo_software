import "../styles/Tarea.css";
import { MdOutlineDeleteForever } from "react-icons/md";
import { ContextoTarea } from "./ProveedorTarea";
import { useContext } from "react";
import CalificacionTarea from "./CalificacionTarea";

const Tarea = ({ tarea }) => {
  const [, , completarTarea, eliminarTarea] = useContext(ContextoTarea);

  if (!tarea) return null;

  const estiloTarea = "tarea-contenedor" + (tarea.completa ? " completa" : "");

  return (
    <div className="tarea-wrapper">
      <div className={estiloTarea}>
        <div
          className="tarea-descripcion"
          onClick={() => completarTarea(tarea.id)}
        >
          {tarea.descripcion}
        </div>
        <div
          className="tarea-icono-borrar"
          onClick={() => eliminarTarea(tarea.id)}
        >
          <MdOutlineDeleteForever />
        </div>
      </div>
      <CalificacionTarea tarea={tarea} />
    </div>
  );
};

export default Tarea;
