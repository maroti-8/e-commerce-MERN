import React from "react";
import playStore from "../../../images/playstore.png";
import appStore from "../../../images/Appstore.png";
import "./Footer.css";

const Footer = () => {
  return (
    <footer id="footer">
      <div className="leftFooter">
        <h4>Download Our APP</h4>
        <p>Download App for Android and IOS mobile phone</p>
        <img src={playStore} alt="PlayStore" />
        <img src={appStore} alt="AppStore" />
      </div>
      <div className="midFooter">
        <h1>E-Commerce</h1>
        <p>Copyrights 2022 &copy; Maroti Chamalwad</p>
      </div>
      <div className="rightFooter">
        <h4>Contact Details</h4>
        <a href="https://www.linkedin.com/in/maroti-chamalwad/">LinkedIn</a>
        <a href="https://github.com/maroti-8">Github</a>
      </div>
    </footer>
  );
};

export default Footer;
