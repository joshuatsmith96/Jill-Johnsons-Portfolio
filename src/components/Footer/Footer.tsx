import './Footer.css'
import { Link } from 'react-router-dom'

function Footer() {

  return (
    <div className="Footer">
        <div className="footer-links">
        <Link to="/About">About</Link>
        <span>•</span>
        <Link to="/Services">Services</Link>
        <span>•</span>
        <Link to="/Contact">Contact</Link>
        </div>
        <p>&#169;Joshua's Website 2023</p>
    </div>
  )
}

export default Footer
