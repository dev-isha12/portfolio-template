import React from 'react'
import Hero from './hero.jsx'
import Navbar from './navbar.jsx'
import Skills from './skills.jsx'
import Education from './education.jsx'
import Work from './work.jsx'
import Language from './language.jsx'
import Contact from './contact.jsx'
import ThemePalette from './themePalette.jsx'
const App = () => {
  return (
    <div>
      <ThemePalette/>
      <Hero/>
      <Navbar/>
      <Skills/>
      <Education/>
      <Work/>
      <Language/>
      <Contact/>
      
      
    </div>
  )
}

export default App
