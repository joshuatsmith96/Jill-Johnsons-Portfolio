import Testimonials from "./testimonial-components/Testimonial"
import GetInTouch from "../../components/Global/GetInTouch"
//Images
import testimonial1 from '../../assets/LowRes/Testimonials/testimonial1.jpg'
import testimonial2 from '../../assets/LowRes/Testimonials/testimonial2.jpg'
import testimonial3 from '../../assets/LowRes/Testimonials/testimonial3.jpg'
import testimonial4 from '../../assets/LowRes/Testimonials/testimonial4.jpg'

function TestimonialPage(){
    return(
        <div className="TestimonialPage">
            <h1 id="testimonial-header">Testimonials</h1>
            <Testimonials image={testimonial1} name={"Jack & Leah"} date={"June 2021"} content={`“Our day was extremely stressful, as weddings tend to be. Jill definitely went above and beyond her duties as just a photographer. She was like my second attendant, providing me with emotional support. If you’re looking for someone who truly cares, Jill is the girl for you.”`}/>
            <Testimonials image={testimonial2} name={"Sarah & John"} date={"July 2021"} content={`“Picking out a photographer was really hard. There were so many choices and we had no idea what to even look for. After talking to Jill, she gave us a sense of ease as she explained the entire process to us. When the wedding day came, there were no surprises. She was well organized and ready to go!”`}/>
            <Testimonials image={testimonial3} name={"Will & Jasmin"} date={"June 2023"} content={`“Will and I got married a little later in life. Once we decided to get married, the first thing we looked for was a photographer. We found Jill on Google very easily. She was very patient with us and explained everything clearly.”`}/>
            <Testimonials image={testimonial4} name={"Jake & Phyllis"} date={"July 2023"} content={`“One of our friends recommended Jill to us after Jill did their wedding. We’ve had Jill do our engagement, wedding, maternity and baby photos. We love her so much, and she’ll forever be our go to photographer.”`}/>
            <GetInTouch />
        </div>
    )
}

export default TestimonialPage