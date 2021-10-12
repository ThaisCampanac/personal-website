import Link from 'next/link'
import React from 'react';
import Image from 'next/image'
import resumePic from '../assets/resume.png'
import homePic from '../assets/home.png'
import projectsPic from '../assets/projects.png'

export default function Navigation() {
  return (
    <div className='body'>
      <div className='navigation'>
          <nav>
            <ul>

              <Link href='/cv'>
                <a className='Link'>
                  <Image src={resumePic} width={50} height={50}></Image>
                </a>
              </Link>
              <Link href='/'>
                <a className='Link'>
                <Image src={homePic} width={60} height={70}></Image>
                </a>
              </Link>
              <Link href='/projects'>
                <a className='Link'>
                  <Image src={projectsPic} width={60} height={70}></Image>
                </a>
              </Link>
            </ul>
          </nav>
      </div>
    </div>
  );
}