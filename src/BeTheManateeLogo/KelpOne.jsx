import React from "react";

export default function KelpOne({ kelpClass = "" }) {
  return (
    <div className={`${kelpClass}`}>
      <svg
        // width="84"
        // height="204"
        preserveAspectRatio="xMaxYMid meet"
        viewBox="-216 -96 312 312"
        version="1.1"
        style={{
          clipRule: "evenodd",
          fillRule: "evenodd",
          strokeLinejoin: "round",
          strokeMiterlimit: "2",
          // width:"inherit",
          // height:"inherit",
        }}
        id="kelp01"
      >
        <g
          transform="matrix(0.46626905,0,0,0.46626905,-326.1416,-271.62414)"
          id="g203"
        >
          <g id="g176" transform="matrix(0.682362,0,0,0.682362,338.951,18.726)">
            <path
              d="m 557.571,1191.97 c -1.65,-18.77 -1.742,-38.78 0.019,-60.09 13.458,-162.793 -29.249,-305.6 -29.249,-305.6 0,0 232.971,154.998 209.221,296.75 -26.873,160.39 46.731,334.09 46.731,334.09 0,0 -0.997,-0.27 -2.86,-0.85 -103.013,-57.99 -183.251,-151.7 -223.862,-264.3 z"
              style={{ 
                fill: "url(#_Linear5)",
                width:"inherit",
                height:"inherit",
              }}
              id="path-kelp01"
            />
          </g>
        </g>
        <defs id="defs240">
          <linearGradient
            id="_Linear5"
            x1="0"
            y1="0"
            x2="1"
            y2="0"
            gradientUnits="userSpaceOnUse"
            gradientTransform="matrix(255.952,630.842,-630.842,255.952,528.341,826.28)"
          >
            <stop
              offset="0"
              style={{ stopColor: "rgb(58,161,147)", stopOpacity: "1" }}
              id="stop233"
            />
            <stop
              offset="0.53"
              style={{ stopColor: "rgb(48,140,127)", stopOpacity: "1" }}
              id="stop235"
            />
            <stop
              offset="1"
              style={{ stopColor: "rgb(15,67,59)", stopOpacity: "1" }}
              id="stop237"
            />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}
