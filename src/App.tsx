import './App.css'
import {Routes, Route} from "react-router-dom"
//Import Components
import NavMenu from './components/NavMenu/NavMenu'
import Footer from './components/Footer/Footer'
//Import Pages
import Home from './pages/Home/Home'
import Services from './pages/Services/Services'

function App() {

  return (
    <div className="App">
      <NavMenu />
      <Routes>
        <Route path="/" element={ <Home/>}/>
        <Route path="/services" element={ <Services/>}/>
      </Routes>
      <Footer />
    </div>
  )
}

export default App