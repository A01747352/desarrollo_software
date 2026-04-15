import { useContext } from "react"
import CapturaTarea from "./CapturaTarea"
import Tarea from "./Tarea"
import { ContextoTarea } from "./ProveedorTarea";

const ListaTareas = () => {
  const [arrTareas] = useContext(ContextoTarea);

  return (
    <div className="lista-tareas">
      <CapturaTarea />

      {
        arrTareas.length === 0 ?
          <Tarea descripcion="No hay datos para mostrar" />
        :
          arrTareas.map( (tarea) => {
            return <Tarea descripcion={tarea.descripcion}
                          completa={tarea.completa}
                          key={tarea.id}
                          id={tarea.id}
                          />
          })
      }
    </div>
  )
}

export default ListaTareas;