 import { Link } from 'react-router-dom'
 
 function GetInTouch() {
    return(
        <div className="GetInTouch">
            <div className="GetInTouch-background"></div>
            <h2>Lets capture the important moments in your life</h2>
            <Link id="getintouch-button" to={"/Jill-Johnsons-Portfolio/Contact"} className="button">GET IN TOUCH</Link>
        </div>
    )
 }

 export default GetInTouch;