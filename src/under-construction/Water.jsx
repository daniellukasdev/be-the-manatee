import "./Water.css";
import Wave from "./Wave";
import KelpOne from "./KelpOne.jsx";
import BeTheManateeSVG from "./BeTheManateeSVG";

export default function Water() {
  return (
    <>
      <KelpOne kelpClass="kelp1" />
      <div className="water-round-container">
        <div className="water-wave-container">
          <Wave waveClass="water-wave1" />
          <Wave waveClass="water-wave2" />
          <Wave waveClass="water-wave3" />
          <Wave waveClass="water-deep" />
        </div>
        <BeTheManateeSVG logoClass="logo-svg" />
      </div>
    </>
  );
}
