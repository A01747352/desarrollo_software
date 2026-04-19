import { createContext, useContext, useState, type ReactNode } from 'react'

type Estado = 'jugando' | 'deuce' | 'ventaja_a' | 'ventaja_b' | 'fin'

interface TenisContextType {
  darkMode: boolean
  toggleDarkMode: () => void
  puntosA: number
  puntosB: number
  gamesA: number
  gamesB: number
  setsHistA: number[]
  setsHistB: number[]
  setsGanadosA: number
  setsGanadosB: number
  estado: Estado
  ganador: string | null
  puntoA: () => void
  puntoB: () => void
  reiniciar: () => void
  dispA: () => string
  dispB: () => string
}

const TenisContext = createContext<TenisContextType | null>(null)

export const useTenis = () => {
  const ctx = useContext(TenisContext)
  if (!ctx) throw new Error('useTenis debe usarse dentro de <TenisProvider>')
  return ctx
}

const PUNTOS_DISPLAY = ['0', '15', '30', '40']

export const TenisProvider = ({ children }: { children: ReactNode }) => {
  const [darkMode, setDarkMode] = useState(true)
  const toggleDarkMode = () => setDarkMode(prev => !prev)

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
    <TenisContext.Provider value={{
      darkMode, toggleDarkMode,
      puntosA, puntosB, gamesA, gamesB,
      setsHistA, setsHistB, setsGanadosA, setsGanadosB,
      estado, ganador,
      puntoA, puntoB, reiniciar,
      dispA, dispB,
    }}>
      {children}
    </TenisContext.Provider>
  )
}

export default TenisContext
