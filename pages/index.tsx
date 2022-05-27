import Navigation from '../components/Navigation'
import SocialMedia from '../components/SocialMedia'
import Languages from '../components/Languages'
import React from 'react'
import Image from 'next/dist/client/image'
import myPhoto from '../assets/myPhoto.jpeg'


export default function Home() {
  return (
    <div className='body'>
      <Navigation></Navigation>
      <div className="content">
        <div className="intro-screen">
          <h1 className="name">Thais Campanac-Climent</h1>
          <h2 className="major">Computer Science and Software Engineer</h2>
          <SocialMedia></SocialMedia>
        </div>
        <div className="about-me">
          <Image src={myPhoto} width={350} height={350} className = "my-photo"></Image>
          <p className="about-me-paragraph">Hello, my name is Thais Campanac-Climent and I am currently a Computer Science and Software Engineering major at the University of Texas at Dallas.
              At the moment my projects include the HackUTD front-end website, my website, and some free-lancing programming. 
          </p>
        </div>
        <div className="technologies">
          <h2 className = "tech-title"> Technical Skills</h2>
          <Languages></Languages>
        </div>
      </div>
    </div>
  )
}
