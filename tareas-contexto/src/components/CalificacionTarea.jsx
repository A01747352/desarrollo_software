import { useContext } from "react";
import { ContextoTarea } from "./ProveedorTarea";
import "../styles/CalificacionTarea.css";

const NIVELES = ["", "Trivial", "Fácil", "Normal", "Difícil", "Retadora"];

const CalificacionTarea = ({ tarea }) => {
  const [, , , , calificarTarea] = useContext(ContextoTarea);

  return (
    <div className="calificacion-contenedor">
      <span className="calificacion-label">Califica la tarea</span>
      <div className="estrellas">
        {[1, 2, 3, 4, 5].map((n) => (
          <span
            key={n}
            className={`estrella${n <= tarea.calificacion ? " activa" : ""}`}
            onClick={() => calificarTarea(tarea.id, n)}
          >
            ★
          </span>
        ))}
      </div>
      <span className="calificacion-nivel">
        {NIVELES[tarea.calificacion] || ""}
      </span>
    </div>
  );
};

export default CalificacionTarea;
