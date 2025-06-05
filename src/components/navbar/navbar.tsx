import React from "react";
import "./navbar.css";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <div className="nav-container">
      <div className="nav-item title">
        <Link to='/'><b>MONOGRAM</b></Link></div>
      <div className="nav-items">
        <div className="nav-item">HOW IT WORKS</div>
        <div className="nav-item">WORKFLOWS</div>
        <div className="nav-item">DOWNLOAD</div>
        <div className="nav-item">BLOG</div>
        <div className="nav-item">SUPPORT</div>
        <div className="nav-item"><b>SHOP</b></div>

        <div className="nav-item usd-item">
           <i className='bx bx-shopping-bag' ></i> 
           <div>
            USD
            </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
