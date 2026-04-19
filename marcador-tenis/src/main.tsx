import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { TenisProvider } from './components/TenisContext'
import App from './App'
import './index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <TenisProvider>
      <App />
    </TenisProvider>
  </StrictMode>
)
