import { useContext, useRef, useState } from "react";
import "../styles/CapturaTarea.css";
import { v4 as uuidv4 } from "uuid";
import { ContextoTarea } from "./ProveedorTarea";
import { MdAddCircle } from "react-icons/md";

const CapturaTarea = () => {
  const [, agregarTareaContexto] = useContext(ContextoTarea);
  const refDescripcion = useRef();
  const [mostrarForma, setMostrarForma] = useState(false);
  const [error, setError] = useState("");

  const agregarTarea = (e) => {
    e.preventDefault();
    const texto = refDescripcion.current.value.trim();
    if (!texto) {
      setError("La descripción no puede estar vacía.");
      return;
    }
    const tareaNueva = {
      descripcion: texto,
      id: uuidv4(),
      completa: false,
      calificacion: 0,
    };
    agregarTareaContexto(tareaNueva);
    refDescripcion.current.value = "";
    setError("");
    setMostrarForma(false);
  };

  const cancelar = () => {
    refDescripcion.current.value = "";
    setError("");
    setMostrarForma(false);
  };

  if (!mostrarForma) {
    return (
      <button className="btn-agregar" onClick={() => setMostrarForma(true)}>
        <MdAddCircle />
      </button>
    );
  }

  return (
    <form className="tarea-forma" onSubmit={agregarTarea}>
      <label htmlFor="descripcion">Nueva tarea:</label>
      <input
        className={`tarea-input${error ? " input-error" : ""}`}
        type="text"
        placeholder="Escribe la descripción aquí..."
        name="descripcion"
        id="descripcion"
        ref={refDescripcion}
        onChange={() => error && setError("")}
        autoFocus
      />
      {error && <span className="tarea-error">{error}</span>}
      <div className="tarea-botones">
        <button className="tarea-boton" type="submit">
          Agregar tarea
        </button>
        <button className="tarea-boton cancelar" type="button" onClick={cancelar}>
          Cancelar
        </button>
      </div>
    </form>
  );
};

export default CapturaTarea;
