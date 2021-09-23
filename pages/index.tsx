import Navigation from '../components/Navigation'
import React from 'react'

export default function Home() {
  return (
    
    <div className='body'>
      <Navigation></Navigation>
      <div className="content">
        <div className="welcome">
          <h1>A Little About Me</h1>
          <div className="about-me">
            <p>Blah blah blah</p>
          </div>
        </div>
        <div className="technologies">
          <h2>Here is some languages and tech I know</h2>
        </div>
        <div className="contactMe">
          <h2>Contact Me!</h2>
        </div>
      </div>
    </div>
  )
}
