import Titulo from './components/Titulo'
import './App.css'
import Registro from './components/Registro'
import Imagen from './components/Imagen'

function App() {

  return (
    <>
      <Titulo 
        texto="COVID-19" 
        subtitulo="Datos actualizados" />

      <Imagen />

      <Registro registro = {
        {
          fecha: new Date(), 
          descripcion: "Contagios",
          cantidad: 2500
        }
      }

      />
    </>
  )
}

export default App
