import React from 'react';
import { Card, Button, Image } from 'semantic-ui-react';
import './About.css';

const handleLinkedIn = () => {
  window.open('https://www.linkedin.com/in/akshaya-rajan/', '_blank');
};

const handleGithub = () => {
  window.open('https://github.com/shaysnutss?tab=overview&from=2024-01-01&to=2024-01-05', '_blank');
};

const handleResume = () => {
  window.open('https://drive.google.com/file/d/1r6Dvzu_mg0SgAl9gPvB4CmyUohKfF6Gn/view?usp=sharing', '_blank');
};

const handleContact = () => {
//   window.location.href = 'mailto:akshayanatu@gmail.com';
    window.open('mailto:akshayanatu@gmail.com', 'emailWindow');
};

    const About = () => (
            <div className="FlexBigContainer">
                <Image src={require("../assets/about/me.jpg")} className="pic" />
                <div className="FlexSmallContainer">
                    <Card.Group className="bigCardGroup" id="bigCardGroup">
                        {/* First Card */}
                        <Card id="card" className="">
                            <Card.Content>
                                <Card.Description>
                                <div id="me">
                                    About me
                                </div>
                                </Card.Description>
                            </Card.Content>
                        </Card>
                        {/* Second Card */}
                        <Card id="card" >
                            <Card.Content>
                                <Card.Description id="cardDescription">
                                Hello 👋 I’m a 22 year old final-year Computer Science Student at Singapore Management University 📚
                                </Card.Description>
                            </Card.Content>
                        </Card>
                        {/* Third Card */}
                        <Card id="card">
                            <Card.Content>
                                <Card.Description id="cardDescription">
                                I love creating backend systems ⚙️ - especially in Java & Springboot! ❤️
                                </Card.Description>
                            </Card.Content>
                        </Card>
                        <Card>
                            <Card.Content>
                                <Card.Description id="contactLine">
                                    <Button onClick={handleResume} id="cardButtons1" > Resume </Button>
                                    <Button onClick={handleContact} id="cardButtons2" > Contact </Button>
                                    <Image src={require("../assets/about/github.png")} id="contactImage1" onClick={() => handleGithub()} />
                                    <Image src={require("../assets/about/linkedin.png")} id="contactImage2" onClick={() => handleLinkedIn()} />
                                </Card.Description>
                            </Card.Content>
                        </Card>
                </Card.Group>
                </div>
        </div>
    );

    export default About;