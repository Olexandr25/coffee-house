import React from 'react';
import './Navbar.css'; // Import your CSS file for styling

const Navbar = () => {
  return (
    <div className="nav_container" style={{ border: '1px solid red'}}>
      {/* Left side */}
      <ul className='nav_navigation'>
        <li>
          <a href="#aboutUs" style={{ color: 'white', opacity: '0.8'}}>About us</a>
        </li>
        <li>
          <a href="#menu" style={{ color: 'white', opacity: '0.8'}}>Menu</a>
        </li>
        <li>
          <a href="#contact" style={{ color: 'white', opacity: '0.8'}}>contact</a>
        </li>
      </ul>

      {/* In center */}
      <div>
        <p style={{ color: 'white', opacity: '0.8'}}>CoffeeHouse</p>
      </div>

      {/* In right side */}
      <ul className="social-links">
        <li>
          <a href="instagram" style={{ color: 'white', opacity: '0.8'}}>Instagram</a>
        </li>
        <li>
          <a href="instagram" style={{ color: 'white', opacity: '0.8'}}>TikTok</a>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
