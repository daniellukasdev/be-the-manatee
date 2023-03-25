import React from "react";

export default function KelpTwo({ kelpClass = "" }) {
  return (
    <div className={`${kelpClass}`}>
      <svg
        width="120"
        height="204"
        viewBox="0 0 120 204"
        version="1.1"
        style={{
          clipRule: "evenodd",
          fillRule: "evenodd",
          strokeLinejoin: "round",
          strokeMiterlimit: "2",
        }}
        id="kelp02"
      >
        <g
          transform="matrix(0.46626905,0,0,0.46626905,-468.71929,-356.43719)"
          id="g203"
        >
          <g id="g176" transform="matrix(0.682362,0,0,0.682362,338.951,18.726)">
            <path
              d="m 976.467,1517.4 c 33.333,-16.2 231.133,-117.75 216.113,-239.68 -14.48,-117.65 169.84,-184.87 169.84,-184.87 0,0 -67.97,64.21 -33.66,194.46 14.33,54.4 11.56,96.69 -2.53,129.46 -83.68,64.51 -188.51,102.89 -302.23,102.89 -16.03,0 -31.885,-0.76 -47.533,-2.26 z"
              style={{
                clipRule: "evenodd",
                fill: "url(#_Linear3)",
                fillRule: "evenodd",
                strokeLinejoin: "round",
                strokeMiterlimit: "2",
              }}
              id="pathkelp02"
            />
          </g>
        </g>
        <defs id="defs240">
        <linearGradient
          id="_Linear3"
          x1="0"
          y1="0"
          x2="1"
          y2="0"
          gradientUnits="userSpaceOnUse"
          gradientTransform="matrix(385.957,-426.811,426.811,385.957,976.467,1519.66)"
        >
          <stop
            offset="0"
            style={{ stopColor: "rgb(15,67,59)", stopOpacity: "1" }}
            id="stop219"
          />
          <stop
            offset="0.49"
            style={{ stopColor: "rgb(48,139,126)", stopOpacity: "1" }}
            id="stop221"
          />
          <stop
            offset="1"
            style={{ stopColor: "rgb(58,161,147)", stopOpacity: "1" }}
            id="stop223"
          />
        </linearGradient>
        </defs>
      </svg>
    </div>
  );
}
