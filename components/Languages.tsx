import Link from 'next/link'
import React from 'react';
import {DiJava, DiHtml5, DiCss3, DiPython} from 'react-icons/di'
import Image from 'next/dist/client/image';
import CLanguage from '../assets/c++language.png'

export default function Languages(){
    let iconStyles = {width: "70px", height: "auto", margin: "10px"}
    return(
        <div className= "grid-languages">
            <div className="card">
                <DiJava style = {iconStyles}></DiJava>
                <h2 className= "language">Java</h2>
            </div>
            <div className="card">
                <DiHtml5 style = {iconStyles}></DiHtml5>
                <h2 className= "language">HTML</h2>
            </div>
            <div className="card">
                <DiCss3 style = {iconStyles}></DiCss3>
                <h2 className= "language">CSS</h2>
            </div>
            <div className="card">
                <DiPython style = {iconStyles}></DiPython>
                <h2 className= "language">Python</h2>
            </div>
            <div className="c-card">
                <Image src = {CLanguage} width = {65} height = {70} className="c-card"></Image>
                <h2 className= "language">C/C++</h2>
            </div>
          </div>
    );
}