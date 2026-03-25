
const Fecha = (props: { fecha: Date }) => {
  const anio = props.fecha.getFullYear();
  const mes = props.fecha.toLocaleString("es-MX", { month: "long" });
  const dia = props.fecha.toLocaleString("es-MX", { day: "2-digit" });

  return (
    <div className="fecha">
      <div className="fecha-anio">
        {anio}
      </div>
      <div className="fecha-mes">
        {mes}
      </div>
      <div className="fecha-dia">
        {dia}
      </div>
    </div>
  )
}

export default Fecha