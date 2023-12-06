import React from 'react'
import './Header.css' // Import your CSS file for styling

const Header = () => {
  return (
    <div className='app__bg app__wrapper section__padding flex__column'>
      <div className='flex__center full__width flex__one'>
        <h1 className='header__title'>
          DISCOVER THE TASTE REAL OF COFFEES WITH COFFE HOUSE
        </h1>
      </div>
      <div className='full__width'>
        <p className='header__sub-text'>
          Inspired by cafe culture prevalent all over, we are a cafe that prides
          ourselves on excellent coffee, fresh ingredients & heartfelt service!
        </p>
      </div>
    </div>
  )
}

export default Header
