interface Props {
  mainImage: any;
  image1: any;
  image2: any;
  image3: any;
  image4: any;
  title: any;
  header: any;
  content: any;
}

function Offering(props: Props) {
  return (
    <div className="Offering">
      <div className="offering-mobile">
        <p id="offering-title">{props.title}</p>
        <h1 id="offering-header">{props.header}</h1>
        <img src={props.mainImage} alt="" id="mainImage" />
        <div className="Offering-Small-Images">
          <img src={props.image1} alt="First Image" />
          <img src={props.image2} alt="Second Image" />
          <img src={props.image3} alt="Third Image" />
          <img src={props.image4} alt="Fourth Image" />
        </div>
        <pre>{<p id="offering-content">{props.content}</p>}</pre>
        <button className="button">Contact Me</button>
      </div>
      <div className="offering-desktop">
        <div className="offering-image-content">
          <div className="offering-image-container">
            <img src={props.mainImage} alt="" id="mainImage" />
          </div>
          <div className="offering-content-container">
            <p id="offering-title">{props.title}</p>
            <h1 id="offering-header">{props.header}</h1>
            <pre>{<p id="offering-content">{props.content}</p>}</pre>
            <button className="button">Contact Me</button>
          </div>
        </div>
        <div className="Offering-Small-Images">
          <img src={props.image1} alt="First Image" />
          <img src={props.image2} alt="Second Image" />
          <img src={props.image3} alt="Third Image" />
          <img src={props.image4} alt="Fourth Image" />
        </div>
      </div>
    </div>
  );
}

export default Offering;
