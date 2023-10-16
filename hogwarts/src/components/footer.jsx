import React from "react";
import ComponentTwo from "./componentTwo";

const Footer = ({ title }) => {
  return (
    <footer className="bg-dark text-white">
      <div className="container">
        <p>&copy; 2023 Your Company Name</p>
        <ComponentTwo titleComponentTwo={title} />
      </div>
    </footer>
  );
};

export default Footer;
