import './App.css'
import {Routes, Route} from "react-router-dom"
//Import Components
import NavMenu from './components/NavMenu/NavMenu'
import Footer from './components/Footer/Footer'
//Import Pages
import Home from './pages/Home/Home'
import Services from './pages/Services/Services'
import About from './pages/About/About'
import TestimonialPage from './pages/Testimonials/TestimonialPage'
import Contact from './pages/Contact/Contact'

function App() {

  return (
    <div className="App">
      <NavMenu />
      <Routes>
        <Route path="/" element={ <Home/>}/>
        <Route path="/services" element={ <Services/>}/>
        <Route path="/About" element={<About />} />
        <Route path="/Testimonials" element={<TestimonialPage />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App