import Navbar from './Components/pages/Navbar'
import Home from './Components/pages/Home'
import AboutMe from './Components/pages/AboutMe'
import MySkills from './Components/pages/MySkills'
import Experience from './Components/pages/Experience'
import Projects from './Components/pages/Projects'
import Contact from './Components/pages/Contact'
import Footer from './Components/pages/Footer'
import ParticlesBackground from './Components/ParticlesBackground'
const App = () => {
  return (
   <>
   <ParticlesBackground/>
   <Navbar/>
   <Home/>
   <AboutMe/>
   <MySkills/>
   <Experience/>
   <Projects/>
   <Contact/>
   <Footer/>
   </>
  )
}

export default App
