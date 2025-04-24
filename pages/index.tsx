import SocialMedia from '../components/SocialMedia'
import React from 'react'
import Image from 'next/image'
import myPhoto from '../assets/myPhoto.jpeg'
import Navigation from '../components/Navigation'


export default function Home() {
  return (
    <div className='body'>
      <div className="content">
        <Navigation></Navigation>
        <div className="intro-screen">
            <div className='photo-side'></div>
          <div className="about-me">
            <h1 className='name'>Hello! My name is Thais Campanac!</h1>
                        
          </div>
          <h1>I am currently redoing my website :)</h1>
        </div>
        
        <div id='work' className='work-screen'>
            
        </div>
        
        <SocialMedia></SocialMedia>
      </div>
    </div>
  )
}
