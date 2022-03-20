import React from "react";

import bassDrum from "../styles/bassDrum.png";

const Navbar = () => {
  return (
    <nav className="navbar">
      <img src={bassDrum} alt="bass drum" width="30"></img>
      <h1>Drumming for Dummies</h1>
      <div className="left">
        <span>React</span> + <span>Tailwind Css</span>
      </div>
    </nav>
  );
};

export default Navbar;

