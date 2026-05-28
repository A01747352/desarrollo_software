import { useNavigate } from 'react-router-dom'

export default function NotFoundPage() {
  const navigate = useNavigate()
  return (
    <main className="notfound-container">
      <h1 className="notfound-code">404</h1>
      <p className="notfound-msg">Página no encontrada</p>
      <button className="btn-back" onClick={() => navigate('/')}>
        ← Ir al inicio
      </button>
    </main>
  )
}
