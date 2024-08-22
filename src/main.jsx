import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Timer from './components'
import "bootstrap/dist/css/bootstrap.min.css"

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <Timer/>
  </StrictMode>,
)
