import { useTenis } from './TenisContext'
import '../styles/Titulo.css'

const Titulo = ({ texto }: { texto: string }) => {
  const { darkMode } = useTenis()

  return (
    <div className={`titulo-tenis ${darkMode ? 'titulo-dark' : 'titulo-light'}`}>
      {texto}
    </div>
  )
}

export default Titulo
