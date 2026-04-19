import React, { createContext, useState } from "react";

export const ContextoTarea = createContext();

function ProveedorTarea({ children }) {
  const [arrTareas, setArrTareas] = useState([]);

  const agregarTarea = (tareaNueva) => {
    setArrTareas([tareaNueva, ...arrTareas]);
  };

  const completarTarea = (id) => {
    setArrTareas(
      arrTareas.map((tarea) =>
        tarea.id === id ? { ...tarea, completa: !tarea.completa } : tarea
      )
    );
  };

  const eliminarTarea = (id) => {
    setArrTareas(arrTareas.filter((tarea) => tarea.id !== id));
  };

  const calificarTarea = (id, calificacion) => {
    setArrTareas(
      arrTareas.map((tarea) =>
        tarea.id === id ? { ...tarea, calificacion } : tarea
      )
    );
  };

  return (
    <ContextoTarea.Provider
      value={[arrTareas, agregarTarea, completarTarea, eliminarTarea, calificarTarea]}
    >
      {children}
    </ContextoTarea.Provider>
  );
}

export default ProveedorTarea;
