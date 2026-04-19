import { useTenis } from './components/TenisContext'
import Titulo from './components/Titulo'
import Boton from './components/Boton'
import Puntos from './components/Puntos'
import './App.css'

function App() {
  const {
    gamesA, gamesB,
    setsHistA, setsHistB,
    setsGanadosA, setsGanadosB,
    estado, ganador,
    puntoA, puntoB, reiniciar,
    darkMode, toggleDarkMode,
  } = useTenis()

  return (
    <div className={`scene ${darkMode ? 'scene-dark' : 'scene-light'}`}>
      {/* Overlay de fondo */}
      <div className={`court-bg ${darkMode ? '' : 'court-bg-light'}`} />

      {/* Botón de tema */}
      <button
        className={`theme-toggle ${darkMode ? 'theme-toggle-dark' : 'theme-toggle-light'}`}
        onClick={toggleDarkMode}
        title={darkMode ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro'}
      >
        {darkMode ? '☀ MODO CLARO' : '☾ MODO OSCURO'}
      </button>

      {/* Título */}
      <Titulo texto="TAREA MARCADOR TENIS" />

      {/* Marcador principal */}
      <div className={`scoreboard ${darkMode ? 'scoreboard-dark' : 'scoreboard-light'}`}>

        {/* Encabezados de columna */}
        <div className="board-labels">
          <div className="col-prev-group">
            {setsHistA.map((_, i) => (
              <div key={i} className="lbl-prev">SET {i + 1}</div>
            ))}
          </div>
          <div className="col-player lbl">JUGADOR</div>
          <div className="col-sets lbl">SETS</div>
          <div className="col-games lbl">JUEGOS</div>
          <div className="col-points lbl">PUNTOS</div>
        </div>

        {/* Filas de jugadores */}
        {[
          {
            jugador: 'a' as const,
            name: 'Diego', surname: 'CARREON',
            games: gamesA, sets: setsGanadosA, hist: setsHistA,
            isWinner: ganador === 'Diego CARREON',
          },
          {
            jugador: 'b' as const,
            name: 'Roberto', surname: 'MARTINEZ',
            games: gamesB, sets: setsGanadosB, hist: setsHistB,
            isWinner: ganador === 'Roberto MARTINEZ',
          },
        ].map((p, i) => (
          <div key={i} className={`board-row ${p.isWinner ? 'winner-row' : ''}`}>
            <div className="prev-cells">
              {p.hist.map((g, j) => (
                <div key={j} className="led-cell prev">{g}</div>
              ))}
            </div>
            <div className="player-cell">
              {p.isWinner && <span className="dot-winner">●</span>}
              <span className="p-name">
                {p.name}<br />
                <strong>{p.surname}</strong>
              </span>
            </div>
            <div className="led-cell sets">{p.sets}</div>
            <div className="led-cell games">{p.games}</div>
            {/* Componente Puntos consume el contexto directamente */}
            <Puntos jugador={p.jugador} />
          </div>
        ))}
      </div>

      {/* Barra de estado */}
      <div className="status-bar">
        {estado === 'deuce'     && <span className="badge deuce">DEUCE</span>}
        {estado === 'ventaja_a' && <span className="badge adv">VENTAJA — CARREON</span>}
        {estado === 'ventaja_b' && <span className="badge adv">VENTAJA — MARTINEZ</span>}
        {estado === 'fin'       && <span className="badge fin">GANA {ganador}</span>}
        {estado === 'jugando'   && <span className="badge playing">EN JUEGO</span>}
      </div>

      {/* Controles: usan el componente Boton */}
      <div className="controls">
        {estado !== 'fin' ? (
          <>
            <Boton texto="PUNTO CARREON"  onClick={puntoA} variante="a" />
            <Boton texto="REINICIAR"      onClick={reiniciar} variante="reset" />
            <Boton texto="PUNTO MARTINEZ" onClick={puntoB} variante="b" />
          </>
        ) : (
          <Boton texto="NUEVO PARTIDO" onClick={reiniciar} variante="reset" />
        )}
      </div>
    </div>
  )
}

export default App
