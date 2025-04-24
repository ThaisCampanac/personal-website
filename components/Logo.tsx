import React from 'react';
import homePic from '../assets/home.png'
import Link from 'next/link';
import Image from 'next/image';

const Logo: React.FC = () => {
  return (
    <Link legacyBehavior href="/">
        <a>
            <Image src={homePic} width={60} height={70}></Image>
        </a>
  </Link>
);};

export default Logo;