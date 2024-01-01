import React from 'react';
import './Skills.css';
import Spline from '@splinetool/react-spline';

export default function Skills() {
    return (
    <div className= "flexBigContainer">
      <div id="flexBigChild" className= "titleContainer" >
        <h1 className = "title">Skills</h1>
      </div>
      <div id="flexBigChild" className = "flexBodyContainer">
        <div  className = "flexLeftBodyContainer">
          <div id="techStackContainer" className = "flexFrontendContainer">
            <h1 className = "title" id ="skillTitles">Frontend</h1>
            <div id="imagesContainer" className="flexFrontendImagesContainer">
              <img className="thirdImage" src={require('../assets/skills/frontend/react.png')} alt="horse" />
              <img src={require('../assets/skills/frontend/cssNewLogo.png')} />
              <img src={require('../assets/skills/frontend/htmlNewLogo.png')} ></img>
            </div>
          </div>
          <div id="techStackContainer" className = "flexDevopsContainer">
            <h1 className = "title" id ="skillTitles" >DevOps</h1>
            <div id="imagesContainer" className="flexDevOpsImagesContainer">
              <img src={require('../assets/skills/devOps/docker.png')} />
              <img src={require('../assets/skills/devOps/aws.png')} />
              <img src={require('../assets/skills/devOps/gitlabNew.png')} ></img>
              <img id="githubActions" src={require('../assets/skills/devOps/githubActions.png')} />
            </div>
          </div>
          <div id="techStackContainer" className = "flexBackendContainer">
            <h1 className = "title" id ="skillTitles" >Backend</h1>
            <div id="imagesContainer" className="flexBackendImagesContainer">
              <img src={require('../assets/skills/backend/java.png')} />
              <img src={require('../assets/skills/backend/springboot.png')} />
              <img src={require('../assets/skills/backend/python.png')} ></img>
              <img id="" src={require('../assets/skills/backend/cTest.png')} />
              <img id="mySql" src={require('../assets/skills/backend/mySqlTest.png')} />
              <img id="" src={require('../assets/skills/backend/flaskTest.png')} />
            </div>
          </div>
        </div>
        <div className = "flexRightBodyContainer">
          <div id="splineElement" className = "splineElement">
            <Spline scene="https://prod.spline.design/4eGoYUAlhmc2I3ch/scene.splinecode" />
          </div>
        </div>
      </div>
    </div>
    
    )
}