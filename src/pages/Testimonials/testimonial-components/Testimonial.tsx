import '../Testimonials.css'

interface Props{
    image: any;
    name: any;
    date: any;
    content: any;
}

function Testimonials(props: Props){
    return(
        <div className="Testimonials">
            <img src={props.image} alt="" />
            <div className="testimonial-content">
                <h1>{props.name}</h1>
                <p>{props.date}</p>
                <p>{props.content}</p>
            </div>
        </div>
    )
}

export default Testimonials