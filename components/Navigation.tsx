import Link from 'next/link'
import React from 'react';

export default function Navigation() {
  return (
    <div className='nav-body'>
      <div className='navigation'>
          <h1 className='logo'>T | C</h1>
          <nav className='nav-bar-link'>
            <ul className="nav-links">
                <li>
                    <Link className='Link' href='#about'>About</Link>
                </li>
                <li>
                    <Link className='Link' href='#work'>Work</Link>
                </li>
                <li>
                    <Link className='Link' href='#portfplio'>Portfolio</Link>
                </li>
            </ul>
          </nav>
      </div>
    </div>
  );
}