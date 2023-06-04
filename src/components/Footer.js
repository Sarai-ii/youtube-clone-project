import React from "react";
import "./Footer.css";
import YouTubeLogo from "../assets/YouTube-Logo.png";

export default function Footer() {
  return (
    <div className="footer">
      <div className="footer-content">
        <div className="footer-left">
          <img src={YouTubeLogo} alt="YouTube logo" className="youtube-logo" />
          <p className="our-names">
           <div className="footer-first-text"> Created by:{" "}
            <a href="https://github.com/JoanavelPascual7">Joanavel Pascual</a>,{" "}
            <a href="https://github.com/JenniferEinstein">Jennifer Einstein</a>,{" "}
            <a href="https://github.com/Sarai-ii">Sarai Thomas</a>, and{" "}
            <a href="https://github.com/fintheehuman">Finesse Poole</a>.
            </div>
          </p>
        </div>
        <div className="footer-right">
          <p className="footer-text">
            YouTube Clone Project &copy; Pursuit 9.6
          </p>
        </div>
      </div>
    </div>
  );
}