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
        <div className="new-website">
          <h1>Welcome</h1>
          <h2>New website, new feelings</h2>
          <p>The last website that I made was hard-coded with HTML and CSS.</p>
          <p>I know now that I need a refresh and a better way to present myself and my projects.</p>
          <p>So goodbye with the old and hello to Website Upgrade.</p>
          <h2>Future Updates to Come!</h2>
        </div>
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
