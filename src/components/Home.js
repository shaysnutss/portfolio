import React from 'react';
import logo from '../logo.svg';
import Spline from '@splinetool/react-spline';
import './Home.css';

export default function Home() {
    return (
    <div className="App">
      <Spline className="animation" scene="https://prod.spline.design/9h4NbPM9-WWQH9VJ/scene.splinecode" />
      <div className="flexContainer">
        <h1 className="title" id = "title1" >Meet your</h1>
        <h1 className="title" id = "title2">Next dev</h1>
      </div>

    </div>
    )
}