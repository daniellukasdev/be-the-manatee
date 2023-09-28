import BeTheManateeLogo from "../BeTheManateeLogo/BeTheManateeLogo";
import Title from "../BeTheManateeLogo/Title";
import "./UnderConstruction.css";

export default function UnderConstruction() {
  return (
    <div className="under-construction">
      {/* <div className="under-construction-header"></div> */}
      <div className="under-construction-body">
      <Title titleClass="logo-title" />
        <BeTheManateeLogo logoClass="logo" />

        <div className="coming-soon">COMING SOON!</div>
        
      </div>
    </div>
  );
}
