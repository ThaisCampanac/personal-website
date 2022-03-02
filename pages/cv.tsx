import Navigation from '../components/Navigation'
import React, { useState } from 'react'
import {Chrono} from "react-chrono";
import data from '../components/data';

export default function cv() {

  return (
    
    <div className='body'>
      <Navigation></Navigation>
      <Chrono items={data} mode="VERTICAL_ALTERNATING"></Chrono>
    </div>
  )
}