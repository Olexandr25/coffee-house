import React from 'react'
import './AboutUs.css'
import { images, data } from '../../constants'
import { Button } from '../../components'

const AboutUs = () => {
  return (
    <div className='app__aboutUs app__wrapper section__padding' id='aboutUs'>
      <div className='app__wrapper_img app__wrapper_img-reverse'>
        <img src={images.cafe_1} alt='cafe' />
      </div>
      <div className='app__wrapper_info'>
        <h1 className='headtext__cormorant' style={{ marginBottom: '1rem' }}>
          {data.about.title}
        </h1>
        {data.about.subText?.map((text, index) => (
          <p
            key={`sub-text ${index}`}
            style={{ marginBottom: '1rem' }}
            className='p__opensans'>
            {text}
          </p>
        ))}
        <div style={{ marginTop: '1rem' }}>
          <Button>Learn more</Button>
        </div>
      </div>
    </div>
  )
}

export default AboutUs
