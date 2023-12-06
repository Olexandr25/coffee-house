import React, { useState } from 'react'
import './Navbar.css' // Import your CSS file for styling
import { GiHamburgerMenu } from 'react-icons/gi'
import { IoMdClose } from "react-icons/io";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false)

  return (
    <nav className='nav_container'>
      {/* Left side */}
      <ul className='nav_navigation'>
        <li>
          <a href='#aboutUs'>About us</a>
        </li>
        <li>
          <a href='#menu'>Menu</a>
        </li>
        <li>
          <a href='#contact'>Contact</a>
        </li>
      </ul>

      {/* In center */}
      <div className='logo'>
        <p>CoffeeHouse</p>
      </div>

      {/* In right side */}
      <ul className='social-links'>
        <li>
          <a href='instagram'>Instagram</a>
        </li>
        <li>
          <a href='instagram'>TikTok</a>
        </li>
      </ul>

      <div className='app__navbar-smallscreen'>
        <GiHamburgerMenu
          color='#fff'
          fontSize={27}
          onClick={() => setToggleMenu(true)}
        />

        {toggleMenu ? (
          <div className='app__navbar-smallscreen_overlay flex__center slide-bottom'>
            <IoMdClose
              fontSize={27}
              className='overlay__close'
              onClick={() => setToggleMenu(false)}
            />

            <ul className='app__navbar-smallscreen_links'>
              <li className='p__opensans'>
                <a href='#home'>Home</a>
              </li>
              <li className='p__opensans'>
                <a href='#about'>About</a>
              </li>
              <li className='p__opensans'>
                <a href='#menu'>Menu</a>
              </li>
              <li className='p__opensans'>
                <a href='#contact'>Contact</a>
              </li>
              <li className='p__opensans'>
                <a href='#instagram'>Instagram</a>
              </li>
              <li className='p__opensans'>
                <a href='#tikTok'>TikTok</a>
              </li>
            </ul>
          </div>
        ) : null}
      </div>
    </nav>
  )
}

export default Navbar
