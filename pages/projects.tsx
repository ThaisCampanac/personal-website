import Navigation from '../components/Navigation'
import React, { useState } from 'react'
import Project from '../components/project'

export default function projects() {

  return (
    
    <div className='body'>
      <Navigation></Navigation>
      <Project></Project>
    </div>
  )
}