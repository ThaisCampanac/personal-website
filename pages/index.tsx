import Navigation from '../components/Navigation'
import React from 'react'

export default function Home() {
  return (
    
    <div className='body'>
      <Navigation></Navigation>
      <div className="content">
        <div className="new-website">
          <h1>Welcome</h1>
          <h2>New website, new feelings</h2>
          <p>The last website that I made was hard-coded with HTML and CSS.</p>
          <p>I know now that I need a refresh and a better way to present myself and my projects.</p>
          <p>So goodbye with the old and hello to Website Upgrade.</p>
          <h2>Future Updates to Come!</h2>
        </div>
      </div>
    </div>
  )
}
