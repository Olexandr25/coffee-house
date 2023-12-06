import React from 'react'
import { Button } from '../' // Assuming you have a Button component
import "./Subscribe.css"

const Subscribe = () => {
  return (
    <div className='subscriber-container'>
      <input
        type='text'
        className='subscriber-input'
        placeholder='Write your email'
      />
      <Button>Subscribe</Button>
    </div>
  )
}

export default Subscribe
