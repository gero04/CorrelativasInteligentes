import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { CorrelativasContext, CorrelativasContextProvider } from './Context/CorrelativaContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CorrelativasContextProvider>
    <App />
    </CorrelativasContextProvider>
  </StrictMode>,
)
