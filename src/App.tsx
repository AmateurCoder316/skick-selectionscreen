import './styles/App.css'
import skickLogo from './assets/skick-logo.avif'

function App() {
  return (
    <main className="selection-screen">
      <img className="skick-logo" src={skickLogo} alt="SKICK" />

      <section className="selection-side selection-side-business">
        <h1>YRITYKSILLE</h1>
      </section>

      <section className="selection-side selection-side-consumer">
        <h1>KULUTTAJILLE</h1>
      </section>
    </main>
  )
}

export default App
