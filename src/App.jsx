import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useState , useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './style.css'
import './base.css'
import './bootstrap.css'
import './color.css'
import './fontawesome-all.css'
import './icofont.css'
import './nice-select.css'
import './responsive.css'
import './about.css'
import './flaticon.css'
import './owl.css'
import './style2.css'
import './style3.css'
import './animate.css'
import './jquery.fancybox.min.css'
import Header from './components/Header'
import Slider from './components/Slider'
import Contact from './components/Contact'
import Choose from './components/Choose'
import Footer from './components/Footer'

import About from './pages/About' 

function App() {
  return (
    <Router>
      <Header /> 
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Slider />
              <Contact />
              <Choose />
              <Footer />
            </>
          }
        />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  )
}

export default App
