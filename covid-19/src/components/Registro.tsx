
import Fecha from './Fecha'
const Registro = ({registro}: { registro: { fecha: Date; descripcion: string; cantidad: number } }) => {
  return (
    <div className="registro">
      <Fecha fecha={registro.fecha} />
      <h2 className="registro h2">{registro.descripcion}</h2>
      <div className="registro-contagios">{registro.cantidad}</div>
    </div>
  )
}

export default Registro