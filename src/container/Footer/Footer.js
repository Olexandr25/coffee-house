import React from 'react'
import './Footer.css'
import { Subscribe } from '../../components'
import { data } from '../../constants'

const Footer = () => {
  return (
    <footer className='app__footer section__padding '>
      <div className='footer_first_section'>
        <Subscribe />
        <div className='footer_address'>{data.address}</div>
      </div>
      <div className='footer__copyright'>
        <p className='p__opensans'>2023 Coffee House. All Rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer
