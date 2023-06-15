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
          <p className="about-me-paragraph">Hello, my name is Thais Campanac-Climent and I am currently a gradute student at Carnegie Mellon University, M.S. Information Security. 
          I graduated from the University of Texas at Dallas with a B.S. in Computer Science and Software Engineering. I am currently a Space Communications and Networks 
          within the High-Rate Delay Torent Network division at NASA. My internship comprises of testing the security capabilities of HDTN.
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
