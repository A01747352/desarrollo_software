import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

interface Country {
  name: { common: string }
  cca2: string
}

export default function HomePage() {
  const [countries, setCountries] = useState<Country[]>([])
  const [searchText, setSearchText] = useState('')
  const [selectedCode, setSelectedCode] = useState('')
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const navigate = useNavigate()

  useEffect(() => {
    axios
      .get<Country[]>('https://restcountries.com/v3.1/all?fields=name,cca2')
      .then((res) => {
        const sorted = res.data.sort((a, b) =>
          a.name.common.localeCompare(b.name.common)
        )
        setCountries(sorted)
        setLoading(false)
      })
      .catch(() => {
        setError('No se pudieron cargar los países. Intenta de nuevo.')
        setLoading(false)
      })
  }, [])

  const filtered = countries.filter((c) =>
    c.name.common.toLowerCase().includes(searchText.toLowerCase())
  )

  const handleDropdown = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const code = e.target.value
    setSelectedCode(code)
    if (code) navigate(`/bandera/${code}`)
  }

  const handleCardClick = (cca2: string) => {
    navigate(`/bandera/${cca2}`)
  }

  return (
    <main className="home-container">
      <header className="home-header">
        <h1 className="home-title">Banderas del mundo</h1>
        <p className="home-subtitle">Selecciona un país para ver su bandera</p>
      </header>

      {loading && <p className="status-msg">Cargando países...</p>}
      {error && <p className="status-msg error">{error}</p>}

      {!loading && !error && (
        <>
          <div className="filters-bar">
            <input
              type="text"
              className="search-input"
              placeholder="Buscar país..."
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
            />

            <select
              className="country-select"
              value={selectedCode}
              onChange={handleDropdown}
            >
              <option value="">-- Ir directo a un país --</option>
              {countries.map((c) => (
                <option key={c.cca2} value={c.cca2}>
                  {c.name.common}
                </option>
              ))}
            </select>
          </div>

          {filtered.length === 0 ? (
            <p className="no-results">No se encontró ningún país con ese nombre.</p>
          ) : (
            <div className="countries-grid">
              {filtered.map((c) => (
                <button
                  key={c.cca2}
                  className="country-card"
                  onClick={() => handleCardClick(c.cca2)}
                >
                  <img
                    src={`https://flagsapi.com/${c.cca2}/flat/32.png`}
                    alt={`Bandera de ${c.name.common}`}
                    className="card-flag"
                    onError={(e) => {
                      ;(e.target as HTMLImageElement).src =
                        `https://flagcdn.com/w40/${c.cca2.toLowerCase()}.png`
                    }}
                  />
                  <span className="card-name">{c.name.common}</span>
                </button>
              ))}
            </div>
          )}
        </>
      )}
    </main>
  )
}
