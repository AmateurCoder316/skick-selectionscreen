import './styles/App.css'
import skickLogo from './assets/skick-logo.avif'

function App() {
  return (
    <main className="selection-screen">
      <img className="skick-logo" src={skickLogo} alt="SKICK" />

      <a
        className="selection-side selection-side-business"
        href="https://example.com"
      >
        <h1>YRITYKSILLE</h1>
      </a>

      <a
        className="selection-side selection-side-consumer"
        href="https://skick.fi"
      >
        <h1>KULUTTAJILLE</h1>
      </a>
    </main>
  )
}

export default App
