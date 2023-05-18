import React from "react";
import Bubbles from "./Bubbles";
import KelpOne from "./KelpOne";
import KelpTwo from "./KelpTwo";
import Manatee from "./Manatee";
import Shark1 from "./Shark1";
import Shark2 from "./Shark2";
import Water from "./Water";
import "./BeTheManateeLogo.css"

export default function BeTheManateeLogo({ logoClass = "" }) {
  return (
    <div className={`${logoClass}`}>
      <Bubbles bubblesClass="bubbles-small" />
      <KelpOne kelpClass="kelp1" />
      <Manatee manateeClass="manatee" />
      <Bubbles bubblesClass="bubbles-large" />
      <KelpTwo kelpClass="kelp2" />
      <Shark1 sharkClass1="shark1" />
      <Shark2 sharkClass2="shark2" />
      <Water />
      
    </div>
  );
}
