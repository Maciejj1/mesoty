import React from "react";
import logo from "../Assets/logo.png";
import "./Footer.scss";
export const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-base">
        <img src={logo} alt="logo" className="footer-base-logo" />
      </div>
    </div>
  );
};
