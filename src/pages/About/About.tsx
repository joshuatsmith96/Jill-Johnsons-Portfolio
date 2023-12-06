import Family from '../../assets/Images/About Page/family photo.jpg'
import GetInTouch from '../../components/Global/GetInTouch'
import './About.css'

function About(){
    return(
        <div className="About">
            <div className="about-section">
                <img src={Family} alt="Family Photo" />
                <div className="about-content">
                    <p>Who Am I?</p>
                    <h1>About Jill</h1>
                    <p>Hi! My name is Jill! I have 2 kids, and my favorite hobby (aside from the obvious, of course) is knitting! I also enjoy being outside in nature! Much of my photography is heavily influenced by nature.</p>
                </div>
            </div>
            <GetInTouch />
        </div>
    )
}

export default About