import "../styles/CapturaTarea.css";
import { useRef} from "react";
import { v4 as uuidv4 } from 'uuid';

const CapturaTarea = (props: { agregarTarea: (tarea: any) => void }) => {

    const refDescripcion = useRef<HTMLInputElement>(null);

    const agregarTarea = (e: any) => {
        e.preventDefault();
        console.log("Nueva tarea: ", refDescripcion.current?.value);
    const tareaNueva = { 
        id: uuidv4(), 
        descripcion: refDescripcion.current?.value
    };
    props.agregarTarea(tareaNueva);
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
            <button className="tarea-boton" type="submit" onClick={agregarTarea}>Agregar tarea</button>
        </form>
    );
}
export default CapturaTarea;