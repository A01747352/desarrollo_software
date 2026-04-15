
import "../styles/Tarea.css";
import { MdOutlineDeleteForever } from "react-icons/md";
import { ContextoTarea } from "./ProveedorTarea";
import { useContext } from "react";

const Tarea = (props) => {

  const [ , , completarTarea, eliminarTarea ] = useContext(ContextoTarea);
  console.log(props.completa);
  
  const estiloTarea = "tarea-contenedor" +(props.completa ? " completa" : "");
  console.log(estiloTarea);

  
  return (
    <div className={estiloTarea}>
      <div className="tarea-descripcion" onClick={() => completarTarea(props.id)}>
        {props.descripcion}
        </div>
      <div className="tarea-icono-borrar" onClick={() => eliminarTarea(props.id)}>
        <MdOutlineDeleteForever />
      </div>
    </div>
  );
};

export default Tarea;