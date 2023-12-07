import "./Services.css";
//Components
import Offering from "./services-components/Offering";
import GetInTouch from "../../components/Global/GetInTouch";
//Images
import Portrait1 from "../../assets/LowRes/Services/Portrait 1.jpg";
import Portrait2 from "../../assets/LowRes/Services/Portrait 2.jpg";
import Portrait3 from "../../assets/LowRes/Services/Portrait 3.jpg";
import Portrait4 from "../../assets/LowRes/Services/Portrait 4.jpg";
import Portrait5 from "../../assets/LowRes/Services/Portrait 5.jpg";

import Wedding1 from "../../assets/LowRes/Services/Wedding 1.jpg";
import Wedding2 from "../../assets/LowRes/Services/Wedding 2.jpg";
import Wedding3 from "../../assets/LowRes/Services/Wedding 3.jpg";
import Wedding4 from "../../assets/LowRes/Services/Wedding 4.jpg";
import Wedding5 from "../../assets/LowRes/Services/Wedding 5.jpg";

function Services() {
  return (
    <div className="Services" onLoad={() => {window.scrollTo(0, 0)}}>
      <h1 id="services-header">What I Offer</h1>
      <Offering
        mainImage={Portrait1}
        image1={Portrait2}
        image2={Portrait3}
        image3={Portrait4}
        image4={Portrait5}
        title={"Beautiful Moments\nIn Life"}
        header={"PORTRAITS"}
        content={
          `I offer a wide range of different portrait shoots to meet my customers individual needs. The first option I offer is the “expedited shoots”, which includes a 20 minute shoot, online gallery, and a minimum of 25 edited photos for $250.\n\n\
            The second option includes a 40-60 minute shoot, online gallery, and about 70-100 photos for $510.\n\n\
            Please send me a message if you’d like to learn more about portrait shoots.`
        }
      />
      <div className="offering-divider"></div>
      <Offering
        mainImage={Wedding5}
        image1={Wedding1}
        image2={Wedding2}
        image3={Wedding3}
        image4={Wedding4}
        title={"Remember your story forever"}
        header={"WEDDINGS"}
        content={
          "Sometimes simplicity is the best solution. Weddings are a day to be remembered as they unfold. Many photographers will try to stage things in a way that is almost unrealistic. My method is to let the day unfold naturally, and capture every moment as they happen.\n\n\
          There are a few factors that go into pricing, but my customers spend on average $3,800 for a full 8 hour session and a second photographer. The smallest amount has been around $2,100. Contact me for more information."
        }
      />

      <GetInTouch />
    </div>
  );
}

export default Services;
