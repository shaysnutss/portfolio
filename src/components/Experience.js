import React from 'react';
import Spline from '@splinetool/react-spline';
import './Experience.css';
import './Companies.js'
import Companies from './Companies.js';

export default function Experience() {
    return (
    <div className="BigFlexContainer">
      <div className = "background"> 
        <img src={require("../assets/experience/addition.png")}></img>
      </div>
      <div className="flexRightContainer">
        <div className="containerTitle">
          <h1 className = "titlePage">Experience</h1>
        </div>
        <div className="content">
          <Companies></Companies>
        </div>
      </div>
      
    </div>
    )
}