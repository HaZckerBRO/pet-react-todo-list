import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './i18next';
import './styles/index.scss'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
