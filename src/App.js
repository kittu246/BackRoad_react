import React from 'react';
import NavBar from './components/NavBar';
import HeroSection from './components/HeroSection';
import About from './components/About';
import Services from './components/Services';
import Tours from './components/Tours';
import Footer from './components/Footer';
import MenuBar from './components/MenuBar';


const App = () => {
  return (
    <div>
      <NavBar/>
      <MenuBar/>
      <HeroSection/>
      <About/>
      <Services/>
      <Tours/>
      <Footer/>
    </div>
  )
}

export default App