import { useTenis } from './TenisContext'
import '../styles/Boton.css'

interface BotonProps {
  texto: string
  onClick: () => void
  variante?: 'a' | 'b' | 'reset'
}

const Boton = ({ texto, onClick, variante = 'reset' }: BotonProps) => {
  const { darkMode } = useTenis()

  return (
    <button
      className={`boton-tenis boton-${variante} ${darkMode ? 'boton-dark' : 'boton-light'}`}
      onClick={onClick}
    >
      {texto}
    </button>
  )
}

export default Boton
