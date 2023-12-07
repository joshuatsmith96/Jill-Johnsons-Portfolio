import './App.css'
import {BrowserRouter, Routes, Route} from "react-router-dom"
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
      <BrowserRouter basename={import.meta.env.DEV ? '/' : '/react-vite-gh-pages/'}>
      <Routes>
        <Route path="/" element={ <Home/>}/>
        <Route path="/Jill-Johnsons-Portfolio/services" element={ <Services/>}/>
        <Route path="/Jill-Johnsons-Portfolio/About" element={<About />} />
        <Route path="/Jill-Johnsons-Portfolio/Testimonials" element={<TestimonialPage />} />
        <Route path="/Jill-Johnsons-Portfolio/Contact" element={<Contact />} />
      </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  )
}

export default App