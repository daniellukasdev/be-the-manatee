import BeTheManateeLogo from "../BeTheManateeLogo/BeTheManateeLogo";
import Title from "../BeTheManateeLogo/Title";
import "./UnderConstruction.css";

export default function UnderConstruction() {
  return (
    <div className="under-construction">
      <Title titleClass="logo-title" />
      <div className="under-construction-header">
      </div>
      <div className="under-construction-body">
        <BeTheManateeLogo logoClass="logo" />

        <div className="coming-soon">COMING SOON!</div>
        
      </div>
    </div>
  );
}
