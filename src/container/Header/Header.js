import React from 'react'
import { Navbar } from '../../components'
import './Header.css' // Import your CSS file for styling

const Header = () => {
  return (
    <div
      className='app__bg app__wrapper'
      style={{ display: 'flex', justifyContent: 'space-between' }}>
      <div style={{ width: '100%' }}>
        <Navbar />
      </div>
      <div className='section__padding'>
        <div
          className='flex__center'
          style={{ width: '100%', display: 'flex' }}>
          <h1 className='header__title'>
            DISCOVER THE TASTE REAL OF COFFEES WITH NGOPISLURR
          </h1>
        </div>
      </div>
      <div className='section__padding'>
        <p className='header__sub-text'>
          Inspired by cafe culture prevalent all over, we are a cafe that prides
          ourselves on excellent coffee, fresh ingredients & heartfelt service!
        </p>
      </div>
    </div>
  )
}

export default Header
