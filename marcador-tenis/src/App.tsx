import { useState } from 'react'
import './App.css'

const PUNTOS_DISPLAY = ['0', '15', '30', '40']
type Estado = 'jugando' | 'deuce' | 'ventaja_a' | 'ventaja_b' | 'fin'

function App() {
  const [puntosA, setPuntosA] = useState(0)
  const [puntosB, setPuntosB] = useState(0)
  const [gamesA, setGamesA] = useState(0)
  const [gamesB, setGamesB] = useState(0)
  const [setsHistA, setSetsHistA] = useState<number[]>([])
  const [setsHistB, setSetsHistB] = useState<number[]>([])
  const [setsGanadosA, setSetsGanadosA] = useState(0)
  const [setsGanadosB, setSetsGanadosB] = useState(0)
  const [estado, setEstado] = useState<Estado>('jugando')
  const [ganador, setGanador] = useState<string | null>(null)

  const ganarGame = (jugador: 'a' | 'b', gA: number, gB: number) => {
    const newGA = jugador === 'a' ? gA + 1 : gA
    const newGB = jugador === 'b' ? gB + 1 : gB
    setPuntosA(0)
    setPuntosB(0)
    setEstado('jugando')

    const ganaSet =
      (jugador === 'a' && newGA >= 6 && newGA - newGB >= 2) ||
      (jugador === 'b' && newGB >= 6 && newGB - newGA >= 2)

    if (ganaSet) {
      const nSA = jugador === 'a' ? setsGanadosA + 1 : setsGanadosA
      const nSB = jugador === 'b' ? setsGanadosB + 1 : setsGanadosB
      setSetsHistA(prev => [...prev, newGA])
      setSetsHistB(prev => [...prev, newGB])
      setSetsGanadosA(nSA)
      setSetsGanadosB(nSB)
      setGamesA(0)
      setGamesB(0)
      if (nSA >= 1 || nSB >= 1) {
        setGanador(jugador === 'a' ? 'Diego CARREON' : 'Roberto MARTINEZ')
        setEstado('fin')
      }
    } else {
      setGamesA(newGA)
      setGamesB(newGB)
    }
  }

  const puntoA = () => {
    if (estado === 'fin') return
    if (estado === 'ventaja_a') { ganarGame('a', gamesA, gamesB); return }
    if (estado === 'ventaja_b') { setEstado('deuce'); return }
    if (estado === 'deuce') { setEstado('ventaja_a'); return }
    const newPA = puntosA + 1
    if (newPA === 4) { ganarGame('a', gamesA, gamesB); return }
    if (newPA === 3 && puntosB === 3) { setEstado('deuce'); setPuntosA(3); setPuntosB(3); return }
    setPuntosA(newPA)
  }

  const puntoB = () => {
    if (estado === 'fin') return
    if (estado === 'ventaja_b') { ganarGame('b', gamesA, gamesB); return }
    if (estado === 'ventaja_a') { setEstado('deuce'); return }
    if (estado === 'deuce') { setEstado('ventaja_b'); return }
    const newPB = puntosB + 1
    if (newPB === 4) { ganarGame('b', gamesA, gamesB); return }
    if (newPB === 3 && puntosA === 3) { setEstado('deuce'); setPuntosA(3); setPuntosB(3); return }
    setPuntosB(newPB)
  }

  const reiniciar = () => {
    setPuntosA(0); setPuntosB(0)
    setGamesA(0); setGamesB(0)
    setSetsHistA([]); setSetsHistB([])
    setSetsGanadosA(0); setSetsGanadosB(0)
    setEstado('jugando'); setGanador(null)
  }

  const dispA = () => {
    if (estado === 'deuce') return 'DUC'
    if (estado === 'ventaja_a') return 'ADV'
    if (estado === 'ventaja_b') return '   '
    return PUNTOS_DISPLAY[puntosA]
  }
  const dispB = () => {
    if (estado === 'deuce') return 'DUC'
    if (estado === 'ventaja_b') return 'ADV'
    if (estado === 'ventaja_a') return '   '
    return PUNTOS_DISPLAY[puntosB]
  }

  return (
    <div className="scene">
      <div className="court-bg" />
      <div className="scoreboard">
        <div className="board-header">
          <div className="court-name">TAREA MARCADOR TENIS</div>
        </div>

        <div className="board-labels">
          <div className="col-prev-group">
            {setsHistA.map((_, i) => (
              <div key={i} className="lbl-prev">SET {i+1}</div>
            ))}
          </div>
          <div className="col-player lbl">JUGADOR</div>
          <div className="col-sets lbl">SETS</div>
          <div className="col-games lbl">JUEGOS</div>
          <div className="col-points lbl">PUNTOS</div>
        </div>

        {[
          { name: 'Diego', surname: 'CARREON', pts: dispA(), games: gamesA, sets: setsGanadosA, hist: setsHistA, isWinner: ganador === 'Diego CARREON' },
          { name: 'Roberto',    surname: 'MARTINEZ', pts: dispB(), games: gamesB, sets: setsGanadosB, hist: setsHistB, isWinner: ganador === 'Roberto MARTINEZ' },
        ].map((p, i) => (
          <div key={i} className={`board-row ${p.isWinner ? 'winner-row' : ''}`}>
            <div className="prev-cells">
              {p.hist.map((g, j) => <div key={j} className="led-cell prev">{g}</div>)}
            </div>
            <div className="player-cell">
              {p.isWinner && <span className="dot-winner">●</span>}
              <span className="p-name">{p.name}<br /><strong>{p.surname}</strong></span>
            </div>
            <div className="led-cell sets">{p.sets}</div>
            <div className="led-cell games">{p.games}</div>
            <div className={`led-cell points ${p.pts === 'ADV' ? 'adv-lit' : ''}`}>{p.pts}</div>
          </div>
        ))}
      </div>

      {/* Esta parte me ayudo Claude, lo del Status Bar, definitivamente hace que se vea super bien */}
      <div className="status-bar">
        {estado === 'deuce'      && <span className="badge deuce">DEUCE</span>}
        {estado === 'ventaja_a'  && <span className="badge adv">VENTAJA — CARREON</span>}
        {estado === 'ventaja_b'  && <span className="badge adv">VENTAJA — MARTINEZ</span>}
        {estado === 'fin'        && <span className="badge fin">GANA {ganador}</span>}
        {estado === 'jugando'    && <span className="badge playing">EN JUEGO</span>}
      </div>

      <div className="controls">
        {estado !== 'fin' ? (
          <>
            <button className="btn btn-a" onClick={puntoA}><span>PUNTO</span><strong>CARREON</strong></button>
            <button className="btn btn-reset" onClick={reiniciar}>REINICIAR</button>
            <button className="btn btn-b" onClick={puntoB}><span>PUNTO</span><strong>MARTINEZ</strong></button>
          </>
        ) : (
          <button className="btn btn-reset wide" onClick={reiniciar}>NUEVO PARTIDO</button>
        )}
      </div>
    </div>
  )
}

export default App