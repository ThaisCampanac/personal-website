import Link from 'next/link'

export default function Home() {
  return (
    <div className='body'>
      <div className='navigation'>
          <nav>
            <ul>
              <Link href='/'>
                <a className='Link'>
                  <img src="/assets/logo.png"></img>
                </a>
              </Link>
              <Link href='/cv'>
                <a className='Link'>CV</a>
              </Link>
              <Link href='/projects'>
                <a className='Link'>Projects</a>
              </Link>
            </ul>
          </nav>
      </div>
    </div>
  )
}
