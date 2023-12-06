import '../Testimonials.css'
import test from '../../../assets/Images/Baby1.jpg'

interface Props{
    image: any;
}

function Testimonials(){
    return(
        <div className="Testimonials">
            <img src={test} alt="" />
            <div className="testimonial-content">
                <h1>Name</h1>
                <p>Wedding Date</p>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cupiditate repellendus dolor eum odit suscipit doloremque architecto sunt numquam nesciunt impedit fuga, culpa consequatur optio eius atque nam explicabo reiciendis facere?</p>
            </div>
        </div>
    )
}

export default Testimonials