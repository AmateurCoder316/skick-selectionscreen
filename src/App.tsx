import './styles/App.css'

import businessBackground from './assets/yrityksille-background.png'
import consumerBackground from './assets/yksityishenkilöille-background.png'

function App() {
  return (
    <main className="selection-screen">
      <section
        className="selection-side"
        style={{ backgroundImage: `url(${businessBackground})` }}
      >
        <h1>YRITYKSILLE</h1>
      </section>

      <section
        className="selection-side"
        style={{ backgroundImage: `url(${consumerBackground})` }}
      >
        <h1>YKSITYISHENKILÖILLE</h1>
      </section>
    </main>
  )
}

export default App
