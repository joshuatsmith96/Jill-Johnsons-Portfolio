//Images
import Newborns from "../../../assets/Images/Baby1.jpg";
import Weddings from "../../../assets/Images/Wedding1.jpg";
import Portraits from "../../../assets/Images/Maternity.jpg";

function CapturingLife() {
  return (
    <div className="CapturingLife">
      <div className="CapturingLife-text">
        <p>MINNEAPOLIS BASED PORTRAIT & WEDDING PHOTOGRAPHER</p>
        <h2>Capturing life’s precious moments</h2>
      </div>
      <div className="CapturingLife-Images">
        <div className="CapturingLife-Images-Section1">
          <div className="CapturingLife-photocard">
            <img id="newborns" src={Newborns} alt="Newborn"/>
            <h3>Newborns</h3>
          </div>
          <div className="CapturingLife-photocard">
            <img id="weddings" src={Weddings} alt="Weddings"/>
            <h3>Weddings</h3>
          </div>
        </div>
        <div className="CapturingLife-photocard">
            <img id="portraits" src={Portraits} alt="Portraits"/>
            <h3 id="portraits-text">Portraits</h3>
          </div>
      </div>
    </div>
  );
}

export default CapturingLife;
