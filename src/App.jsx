import React from 'react'
import Navbar from './Components/pages/Navbar'
import Home from './Components/pages/Home'
import AboutMe from './Components/pages/AboutMe'
import MySkills from './Components/pages/MySkills'
import Projects from './Components/pages/Projects'
import Contact from './Components/pages/Contact'
import Footer from './Components/pages/Footer'
import './App.css'
const App = () => {
  return (
   <>
   <Navbar/>
   <Home/>
   <AboutMe/>
   <MySkills/>
   <Projects/>
   <Contact/>
   <Footer/>
   </>
  )
}

export default App