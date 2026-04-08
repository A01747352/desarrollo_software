import { useState } from 'react'
import './App.css'
import Boton from './components/Boton'
import Puntos from './components/Puntos'
import Titulo from './components/Titulo'

function App() {

  console.log("Renderizando App")

  //Estado de la app
const [puntosA, setPuntosA] = useState(4);
const [puntosB, setPuntosB] = useState(2);

const onClickA = () => {
    setPuntosA(puntosA + 1)   // Asíncrona
  }
const onClickB = () => {
    setPuntosB(puntosB + 1)
  }
const onClickReset = () => {
    setPuntosA(0)
    setPuntosB(0)
  }

  return (
    <div className="App">
      <Titulo texto="Jugador A" />
      <Puntos valor={puntosA} />
      <Titulo texto="Jugador B" />
      <Puntos valor={puntosB} />

      <Boton texto="Punto de A" onClick={onClickA}/>
      <Boton texto="Punto de B" onClick={onClickB}/>
      <Boton texto="Reiniciar" onClick={onClickReset}/>
    </div>
  )
}

export default App