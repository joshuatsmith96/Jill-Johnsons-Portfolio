import './Footer.css'
import { Link } from 'react-router-dom'

function Footer() {

  return (
    <div className="Footer">
        <div className="footer-links">
        <Link to="/Jill-Johnsons-Portfolio/About">About</Link>
        <span>•</span>
        <Link to="/Jill-Johnsons-Portfolio/Services">Services</Link>
        <span>•</span>
        <Link to="/Jill-Johnsons-Portfolio/Contact">Contact</Link>
        </div>
        <p>&#169;Joshua's Website 2023</p>
    </div>
  )
}

export default Footer
