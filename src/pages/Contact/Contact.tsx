import Thumbnail from "../../assets/LowRes/Jill Johnson.jpg";
import "./Contact.css";

function Contact() {
  return (
    <div className="Contact" onLoad={() => {window.scrollTo(0, 0)}}>
      <img src={Thumbnail} alt="" />
      <div className="contact-content">
      <h1>Get In Touch!</h1>
        <p>If you’d like to get in touch with me, please fill out the form below. Thanks!</p>
        <form id="contact-form" action="#">
          <div className="form-inputs">
            <input type="text" placeholder="Name" />
            <input type="text" placeholder="Email" />
            <select name="Event Type" id="event-type" placeholder="Event Type">
              <option value="Wedding">Wedding</option>
              <option value="Maternity">Maternity</option>
              <option value="Maternity">Portrait</option>
            </select>
            <input type="date" />
          </div>
          <input id="subject" type="text" placeholder="Subject"/>
          <textarea name="message" id="message" placeholder="Your message here..."></textarea>
          <div className="center">
          <button className="button">Send</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Contact;
