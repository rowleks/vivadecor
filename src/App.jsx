import "./App.css";
import Brilliance from "./components/brilliance/Brilliance";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import OurService from "./components/our-service/OurService";


function App() {
  return (
    <div className="app">
      <header className="header">
        <Navbar />
      </header>
      <section className="hero-section">
        <Hero />
        <OurService />
        <Brilliance />

      </section>
    </div>
  )
}

export default App
