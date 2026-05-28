import { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import axios from 'axios'

interface CountryInfo {
  name: { common: string; official: string }
  cca2: string
  capital?: string[]
  region: string
  population: number
}

export default function FlagPage() {
  const { countryCode } = useParams<{ countryCode: string }>()
  const navigate = useNavigate()
  const [country, setCountry] = useState<CountryInfo | null>(null)
  const [notFound, setNotFound] = useState(false)
  const [loading, setLoading] = useState(true)

  const isInvalidCode = countryCode?.startsWith('INVALID_')
  const searchedName = isInvalidCode
    ? decodeURIComponent(countryCode!.replace('INVALID_', ''))
    : null

  useEffect(() => {
    if (isInvalidCode) {
      setNotFound(true)
      setLoading(false)
      return
    }

    axios
      .get<CountryInfo[]>(
        `https://restcountries.com/v3.1/alpha/${countryCode}`
      )
      .then((res) => {
        setCountry(res.data[0])
        setLoading(false)
      })
      .catch(() => {
        setNotFound(true)
        setLoading(false)
      })
  }, [countryCode, isInvalidCode])

  if (loading) {
    return (
      <main className="flag-container">
        <p className="status-msg">Cargando...</p>
      </main>
    )
  }

  if (notFound) {
    return (
      <main className="flag-container error-box">
        <h2 className="error-title">País no encontrado</h2>
        <p className="error-text">
          {searchedName
            ? `No existe ningún país con el nombre "${searchedName}".`
            : `El código de país "${countryCode}" no es válido.`}
        </p>
        <button className="btn-back" onClick={() => navigate('/')}>
          ← Regresar
        </button>
      </main>
    )
  }

  const flagUrl = `https://flagsapi.com/${country!.cca2}/flat/256.png`

  return (
    <main className="flag-container">
      <h1 className="country-name">{country!.name.common}</h1>
      <p className="country-official">{country!.name.official}</p>

      <img
        src={flagUrl}
        alt={`Bandera de ${country!.name.common}`}
        className="flag-img"
        onError={(e) => {
          ;(e.target as HTMLImageElement).src =
            `https://flagcdn.com/w320/${country!.cca2.toLowerCase()}.png`
        }}
      />

      <div className="country-details">
        {country!.capital && (
          <p>
            <strong>Capital:</strong> {country!.capital.join(', ')}
          </p>
        )}
        <p>
          <strong>Región:</strong> {country!.region}
        </p>
        <p>
          <strong>Población:</strong>{' '}
          {country!.population.toLocaleString()}
        </p>
      </div>

      <button className="btn-back" onClick={() => navigate('/')}>
        ← Regresar
      </button>
    </main>
  )
}
