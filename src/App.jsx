import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Presentation from './components/Presentation'
import Objectifs from './components/Objectifs'
import Domaines from './components/Domaines'
import References from './components/References'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="bg-white text-g3mDark font-sans">
      <Navbar />
      <Hero />
      <Presentation />
      <Objectifs />
      <Domaines />
      <References />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
