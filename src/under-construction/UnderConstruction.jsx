import BeTheManateeLogo from "../BeTheManateeLogo/BeTheManateeLogo";
import Title from "../BeTheManateeLogo/Title";
import "./UnderConstruction.css";

export default function UnderConstruction() {
  return (
    <div className="under-construction">
      {/* <div className="under-construction-header"></div> */}
      <div className="under-construction-body">
        <div className="logo-title-holder">
          <Title titleClass="logo-title" />
        </div>
        <div className="logo-holder">
          <BeTheManateeLogo logoClass="logo" />
        </div>
        <div className="coming-soon">COMING SOON!</div>
      </div>
    </div>
  );
}
