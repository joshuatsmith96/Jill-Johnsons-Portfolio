import './Home.css'
//Images
import JillJohnson from '../../assets/Images/Jill Johnson.jpg'
//Components
import MeetMe from './home-components/MeetMe'
import Moments from './home-components/Moments'
import CapturingLife from './home-components/CapturingLife'
import GetInTouch from '../../components/Global/GetInTouch'

window.onload = function() {
  document.getElementsByClassName("navlink")[0];
}

function Home() {
  return (
    <div className="Home">
      <div className="hero-img-container">
      <img id="home-hero" src={JillJohnson} alt="Jill Johnson"/>
      </div>
      <MeetMe />
      <Moments />
      <CapturingLife />
      <GetInTouch />
    </div>
  )
}

export default Home