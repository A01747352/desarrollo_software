import { useTenis } from './TenisContext'
import '../styles/Puntos.css'

interface PuntosProps {
  jugador: 'a' | 'b'
}

const Puntos = ({ jugador }: PuntosProps) => {
  const { dispA, dispB, darkMode } = useTenis()
  const valor = jugador === 'a' ? dispA() : dispB()

  return (
    <div className={`puntos-tenis ${darkMode ? 'puntos-dark' : 'puntos-light'}`}>
      {valor}
    </div>
  )
}

export default Puntos
