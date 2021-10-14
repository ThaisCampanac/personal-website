import Navigation from '../components/Navigation'
import React from 'react'
import Image from 'next/dist/client/image'
import myPhoto from '../assets/myPhoto.jpeg'
import {FaGithubSquare, FaInstagramSquare, FaLinkedin} from 'react-icons/fa'
import {MdEmail} from 'react-icons/md'

export default function Home() {
  let iconStyles = {width: "50px", height: "auto", margin: "10px"}
  return (
    <div className='body'>
      <Navigation></Navigation>
      <div className="content">
        <div className="intro-screen">
          <h1 className="name">Thais Chloe Campanac-Climent</h1>
          <h2 className="major">Computer Science and Software Engineer</h2>
          <div className="contact-me-icons">
            <a href = "https://github.com/ThaisCampanac" target = "_blank">
              <FaGithubSquare style = {iconStyles}></FaGithubSquare>
            </a>
            <a href = "https://www.linkedin.com/in/thaiscampanac/" target = "_blank">
              <FaLinkedin style = {iconStyles}></FaLinkedin>
            </a>
            <a href = "mailto:thais.campanac@gmail.com">
              <MdEmail style = {iconStyles}></MdEmail>
            </a>
            <a href = "https://www.instagram.com/thaiscam2" target = "_blank">
              <FaInstagramSquare style = {iconStyles}></FaInstagramSquare>
            </a>
          </div>
        </div>
        <div className="about-me">
          <Image src={myPhoto} width={350} height={350} className = "my-photo"></Image>
          <p className="about-me-paragraph">Hello, my name is Thais Campanac-Climent and I am currently a Computer Science and Software Engineering major at the University of Texas at Dallas.
              At the moment my projects include the HackUTD front-end website, my website, and some free-lancing programming. 
          </p>
        </div>
        <div className="technologies">
          <h2>Skills</h2>
          <h3>This is the highlights of my technical skills</h3>
          <div className= "languages">

          </div>
        </div>
        <div className="contactMe">
          <h2>Contact Me!</h2>
        </div>
      </div>
    </div>
  )
}
