import Link from 'next/link'
import {GiAbstract097} from 'react-icons/gi'
import React from 'react';

export default function Navigation() {
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
    </div>
  );
}