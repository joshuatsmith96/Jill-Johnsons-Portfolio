import './App.css'
//Import Components
import NavMenu from './components/NavMenu/NavMenu'
import Footer from './components/Footer/Footer'
//Import Pages
import Home from './pages/Home/Home'

function App() {

  return (
    <div className="App">
      <NavMenu />
      <Home />
      <Footer />
    </div>
  )
}

export default App
