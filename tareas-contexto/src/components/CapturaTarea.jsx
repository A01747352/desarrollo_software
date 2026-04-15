
import { useContext, useRef} from "react";
import "../styles/CapturaTarea.css";
import { v4 as uuidv4 } from 'uuid';
import { ContextoTarea } from "./ProveedorTarea";

const CapturaTarea = (props) => {

  const [ , agregarTareaContexto] = useContext(ContextoTarea)

  const refDescripcion = useRef();

    const agregarTarea = (e) => {
    e.preventDefault();
    console.log("Nueva tarea: ", refDescripcion.current.value);
    const tareaNueva = {
      descripcion: refDescripcion.current.value,
      id: uuidv4(),
      completa: false
    };
    agregarTareaContexto(tareaNueva);
  };

  return (
    <form className="tarea-forma" onSubmit={agregarTarea}>
      <label htmlFor="descripcion">Nueva tarea:</label>
      <input
        className="tarea-input"
        type="text"
        placeholder="Escribe la descripción aquí..."
        name="descripcion"
        id="descripcion"
        ref={refDescripcion}
      />
      <button className="tarea-boton" type="submit">Agregar tarea</button>
    </form>
  );
};

export default CapturaTarea;