import Navigation from '../components/Navigation'
import React, { useState } from 'react'
import pdf2021 from '../assets/ResumeSept2021.png'
import Image from 'next/image'

export default function cv() {

  return (
    
    <div className='body'>
      <Navigation></Navigation>
      <Image src={pdf2021}></Image>
    </div>
  )
}