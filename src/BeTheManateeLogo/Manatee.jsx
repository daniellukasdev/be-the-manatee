import React from "react";

export default function Manatee({ manateeClass = '' }) {
  return (
    <svg
      className={`${manateeClass}`}
      width="326.98914"
      height="181.42627"
      preserveAspectRatio="xMaxYMid meet"
      viewBox="0 0 326.98914 181.42627"
      version="1.1"
      style={{
        clipRule: "evenodd",
        fillRule: "evenodd",
        strokeLinejoin: "round",
        strokeMiterlimit: "2",
      }}
      id="manatee-svg"
    >
      <g
        transform="matrix(0.46626905,0,0,0.46626905,-344.54791,-238.68332)"
        id="g203"
      >
        <g
          id="manatee"
          transform="matrix(1.0169104,0,0,1.0169104,-522.57879,72.643448)"
        >
          <path
            d="m 1930.1,486.85 c -1.15,-10.684 -16.96,-18.08 -45.31,-28.42 -36.3,-13.245 -150.44,-55.527 -306.65,6.136 -190.95,75.382 -198.01,168.559 -217.64,197.815 -27.76,41.353 -122.74,40.601 -119.89,104.307 1.23,27.328 82.21,69.842 135.07,34.409 57.66,-38.65 42.12,-104.036 54.86,-122.465 11.15,-16.133 110.92,-20.591 185.58,-46.239 82.17,-28.223 97.07,-47.81 115.06,-53.07 8.54,-2.496 -11.74,16.408 -8.1,18.348 9.82,5.239 20.97,-8.004 39.7,-6.987 24.26,1.317 26.21,-2.203 28.86,-7.301 6.11,-11.742 -9.16,-23.387 1.09,-28.947 15.17,-8.227 35.75,58.492 55.73,63.662 24.57,6.356 39.76,-22.309 31.35,-40.34 -7.85,-16.86 -41.84,-43.339 -41.84,-43.339 0,0 19.59,-6.448 49.98,-7.912 7.61,-0.366 44.08,-21.768 42.15,-39.657 z"
            style={{ fill: "url(#_Linear4)" }}
            id="path175"
          />
        </g>
      </g>
      <defs id="defsManatee">
        <linearGradient
          id="_Linear4"
          x1="0"
          y1="0"
          x2="1"
          y2="0"
          gradientUnits="userSpaceOnUse"
          gradientTransform="matrix(415.475,-382.632,382.632,415.475,1343.18,814.584)"
        >
          <stop
            offset="0"
            style={{ stopColor: "rgb(58,161,147)", stopOpacity: "1" }}
            id="stop226"
          />
          <stop
            offset="0.52"
            style={{ stopColor: "rgb(128,200,190)", stopOpacity: "1" }}
            id="stop228"
          />
          <stop
            offset="1"
            style={{ stopColor: "rgb(154,214,206)", stopOpacity: "1" }}
            id="stop230"
          />
        </linearGradient>
      </defs>
    </svg>
  );
}
