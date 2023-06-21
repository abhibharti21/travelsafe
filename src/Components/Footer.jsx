import React from "react";
import { FaLinkedinIn } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";

const Footer = () => {
  return (
    <div className="footer">
      <div className="left">
        <h1>Travel&Safe</h1>
        <p>Promise of safe journey</p>
        <p>all rights &copy; reserved to Abhishek Corp. (2023-2026)</p>
      </div>
      <div className="right">
        <p>contact us:</p>
        <div className="footerLinks">
          <a
            href="https://www.linkedin.com/in/abhishek-bharti-3322b1189/"
            target={"_blank"}
            style={{ animationDelay: "0.1s" }}
          >
            <FaLinkedinIn />
          </a>
          <a
            href="https://www.facebook.com/profile.php?id=100041314941490"
            target={"_blank"}
            style={{ animationDelay: "0.3s" }}
          >
            <FaFacebookF />
          </a>
          <a
            href="https://github.com/abhibharti21"
            target={"_blank"}
            style={{ animationDelay: "0.5s" }}
          >
            <FiGithub />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
