import "./App.css";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";


function App() {
  return (
    <div className="app">
      <header className="header">
        <Navbar />
      </header>
      <section className="hero-section">
        <Hero />

      </section>
    </div>
  )
}

export default App
