import React, { useRef } from 'react';
import { Button, Card, CardGroup } from 'semantic-ui-react';
import './Companies.css'
import styled from 'styled-components'

const CustomButton = styled(Button)`
    background-color: transparent !important;
    color: white !important;
    border-radius: 50px;
    padding-left:3.5%;
    padding-right:3.5%;
    border: 3px solid #1E1E1E;
    justify-content: center;
    align-items: center;
    box-shadow: -5px -5px 250px 0px rgba(255, 255, 255, 0.02) inset;
    backdrop-filter: blur(21px);
    margin-right: 2%;
    margin-bottom:2.3%;
    }
`;

const TransparentCard = styled(Card)`
    background-color: transparent !important;
    box-shadow: none !important; /* Remove shadows */
    border: 3px solid #1E1E1E;
`;

const ColumnCardGroup = styled(CardGroup)`
    .card {
        margin: 0 !important; /* Remove space between cards */
    }
    color:white;
    display: flex !important;
    flex-direction: column !important; /* Arrange cards top to bottom */
    position:relative;
    top:10%
    left:40%;
`;

const cardData = [
    {
        header: 'Citibank',
        description: 'Impl a SMTP server that receives emails & a UI that accepts multiple file types, which are then parsed & made into Jira Tickets.',
        buttons: [
            {
                key: 'React', content: 'React'
            },
            {
                key: 'Java', content: 'Java'
            }
        ]
    },
    {
        header: 'Autodesk',
        description: 'Supported L2FS team by creating new APIs & adding functionalities to existing ones. ',
        buttons: [
            {
                key: 'Java', content: 'Java'
            },
            {
                key: 'SpringBoot', content: 'SpringBoot'
            },
            {
                key: 'Mockito', content: 'Mockito'
            },
            {
                key: 'Cucumber', content: 'Cucumber'
            
            },
            {
                key: 'CI/CD', content: 'CI/CD'
            }
        ]
    },
    {
        header: 'Invigilo',
        description: 'Developed an android application that enables detection of slip, trips and falls.',
        buttons: [
            {
                key: 'Android Studio', content: 'Android Studio'
            },
            {
                key: 'Java', content: 'Java'
            },
            {
                key: 'Shell Scripting', content: 'Shell Scripting'
            },
            {
                key: 'C', content: 'C'
            }
        ]
    }

]

const Companies = () =>{
    return(
        <CardGroup className="ColumnCardGroup">
            {cardData.map((card, index) => (
            <Card key={index} className="transparentCard">
                <Card.Content className="cardContent">
                    <Card.Header className="cardTitle">{card.header}</Card.Header>
                    <div className='ui buttons'> {/* Adjust the class name to match the number of buttons */}
                        {card.buttons.map(button => (
                        <Button className="cardButton" {...button} />
                        ))}
                    </div>
                    <Card.Description className="cardDescription">{card.description}</Card.Description>
                </Card.Content>
            </Card>
            ))}
        </CardGroup>
    )
}

export default Companies;