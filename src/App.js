import React, { useRef } from 'react';
import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import About from "./components/About";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";


function App() {


  return (
    <div>
      <Parallax pages={4}>
        <ParallaxLayer offset={0} className="center" id="layer1">
          <Home />
        </ParallaxLayer>
        <ParallaxLayer offset={1} className="center" id="layer4">
          <About />
        </ParallaxLayer>
        <ParallaxLayer offset={2} className="center" id="layer2">
          <Skills />
        </ParallaxLayer>
        <ParallaxLayer offset={3} className="center" id="layer3">
          <Experience />
        </ParallaxLayer>
      </Parallax>


    </div>
  );
}

export default App;