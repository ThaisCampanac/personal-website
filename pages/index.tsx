import Link from 'next/link'
import {GiAbstract097} from 'react-icons/gi'

export default function Home() {
  return (
    <div className='body'>
      <div className='navigation'>
          <nav>
            <ul>

              <Link href='/cv'>
                <a className='Link'>Resume</a>
              </Link>
              <Link href='/'>
                <a className='Link'>
                  <GiAbstract097></GiAbstract097>
                </a>
              </Link>
              <Link href='/projects'>
                <a className='Link'>Projects</a>
              </Link>
            </ul>
          </nav>
      </div>
      <div className="content">
        <div className="welcome">
          <h1>Hi There!</h1>
          <h2>A Little About Me</h2>
          <div className="about-me">
            <p>Blah blah blah</p>
          </div>
        </div>
        <div className="technologies">
          <h2>Here is some languages and tech I know</h2>
        </div>
        <div className="projects">
          <h2>Some Personal Projects to peek at</h2>
        </div>
        <div className="contactMe">
          <h2>Contact Me!</h2>
        </div>
      </div>
    </div>
  )
}
