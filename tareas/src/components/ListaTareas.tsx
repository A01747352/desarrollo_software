import { useState } from "react";
import CapturaTarea from "./CapturaTarea";
import Tarea from "./Tarea";

const ListaTareas = () => {
    //La información de las tareas (arreglo de objetos)
    const [arrTareas, setArrTareas] = useState<any[]>([]);

    const agregarTarea = (tareaNueva: any) => {
        setArrTareas([tareaNueva, ...arrTareas]);
    }
    return (
        <div className="lista-tareas">
            <CapturaTarea agregarTarea={agregarTarea} />

            {
                // Genera la lista de tareas con Javascript
                arrTareas.length !== 0 ? // SI esta condición se cumple:
                arrTareas.map((tarea) => {
                return <Tarea descripcion={tarea.descripcion}
                            key={tarea.id}
                            //id={tarea.id}//
                            />;
                })
                : // si NO
                <div className="tarea-contenedor">No hay tareas</div>
            }
        </div>
    );
};
export default ListaTareas;