import React from "react";
import "./Bubbles.css";

export default function Bubbles({ bubblesClass = '' }) {
    return (
        <div className={`bubble-container ${bubblesClass}`}>
            <div className="bubble bubble-1"></div>
            <div className="bubble bubble-2"></div>
            <div className="bubble bubble-3"></div>
            <div className="bubble bubble-4"></div>
            <div className="bubble bubble-5"></div>
        </div>
    );
}