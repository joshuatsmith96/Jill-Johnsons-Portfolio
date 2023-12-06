import { Link } from 'react-router-dom'
 
function MeetMe() {
  return (
    <div className="MeetMeContainer">
      <div className="MeetMe">
      <div className="Headshot-Container">
      <div className="Headshot"></div>
      </div>
        <div className="MeetMeContent">
            <h1>Meet Jill</h1>
            <h3>Mom and photographer</h3>
            <p>Hi! I’m Jill. I’m a photographer and mother, and my passion is to make sure your memories are captured. I know first hand how important each and every moment is with your loved ones, and thats why capturing those moments mean so much to me.</p>
            <Link id="meet-me-button" to={"/About"} className="button">Learn More About Me</Link>
        </div>
      </div>
    </div>
  )
}

export default MeetMe
