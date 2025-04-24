import {FaGithubSquare, FaInstagramSquare, FaLinkedin} from 'react-icons/fa'
import {MdEmail} from 'react-icons/md'

export default function SocialMedia() {
    let iconStyles = {width: "50px", height: "auto", margin: "10px"}
    return (
        <div className="contact-me-icons" id='contact'>
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
    );
  }