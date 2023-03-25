import "./Water.css";
import Wave from "./Wave";

export default function Water() {
  return (
    <div className="water-round-container">
      <div className="water-wave-container">
        <Wave waveClass="water-wave1" />
        <Wave waveClass="water-wave2" />
        <Wave waveClass="water-wave3" />
        <Wave waveClass="water-deep" />
      </div>
    </div>
  );
}
