import { StrictMode } from 'react'
import { createRoot, hydrateRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import App from './App'
import './styles.css'

const app = (
  <StrictMode>
    <HelmetProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </HelmetProvider>
  </StrictMode>
)

const rootEl = document.getElementById('root')!

// Prerendered pages ship full HTML: hydrate it instead of throwing it away and
// re-rendering (which doubled layout/paint work and delayed LCP). `vite dev`
// serves an empty #root, so fall back to a plain client render there.
if (rootEl.hasChildNodes()) {
  hydrateRoot(rootEl, app)
} else {
  createRoot(rootEl).render(app)
}
