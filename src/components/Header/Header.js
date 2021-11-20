import React from "react";

function Header() {
  return (
    <div className="header">
      <div style={{ padding: "50px", backgroundColor: "maroon" }}>Logo</div>
      <ul className="menu">
        <li className="menu-item">About</li>
        <li className="menu-item">Salon Services</li>
        <li className="menu-item">Products</li>
        <li className="menu-item">Contact</li>
      </ul>
    </div>
  );
}

export default Header;
