import "../styles/Tarea.css";
import { MdOutlineDeleteForever } from "react-icons/md";
const Tarea = (props: { descripcion: string }) => {
    return (
            <div className="tarea-contenedor">
            <div className="tarea-descripcion">{props.descripcion}</div>
            <div className="tarea-icono-borrar">
            <MdOutlineDeleteForever />
            </div>
            </div>
        );
};

export default Tarea;
