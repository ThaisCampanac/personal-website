import Navigation from '../components/Navigation'
import React from 'react'
import Image from 'next/dist/client/image'
import myPhoto from '../assets/myPhoto.jpeg'

export default function Home() {
  return (
    
    <div className='body'>
      <Navigation></Navigation>
      <div className="content">
        <div className="about-me">
          <Image src={myPhoto} width={350} height={350} className = "my-photo"></Image>
          <p className="about-me-paragraph">Hello, my name is Thais Campanac-Climent and I am currently a Computer Science and Software Engineering major at the University of Texas at Dallas.
              At the moment my projects include the HackUTD front-end website, my website, and some free-lancing programming. 
          </p>
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
