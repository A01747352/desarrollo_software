import React, { createContext, useState } from 'react'

export const ContextoTarea = createContext();

function ProveedorTarea({children}) {
  // Estado para almacenar el arreglo de tareas
  const [arrTareas, setArrTareas] = useState([])
  // Comportamiento
  const agregarTarea = (tareaNueva) => {
    setArrTareas([tareaNueva, ...arrTareas]);
  };
  const completarTarea = (id) => {
    const arrTareasNuevo = arrTareas.map( (tarea) => {
      if (tarea.id === id) {
        tarea.completa = !tarea.completa;
      }
      return tarea;
    }
    );
    setArrTareas(arrTareasNuevo);
  };

  const eliminarTarea = (id) => {
    const arrTareasNuevo = arrTareas.filter( (tarea) => {
      return tarea.id !== id;
    }
    );

    setArrTareas(arrTareasNuevo);
  };
  /*const completar = () => {
    props.completarTarea(props.id)
  };*/
  return (
  <ContextoTarea.Provider value={[arrTareas, agregarTarea, completarTarea, eliminarTarea]}>
    {children}
  </ContextoTarea.Provider>
  )
}

export default ProveedorTarea
