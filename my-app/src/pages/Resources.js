import React from "react";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import colorpicker from "../images/colorpicker.png";
import notetaker from "../images/notetaker.png"
import dayplanner from "../images/dayplanner.png"
import slipperyslopes from "../images/slipperyslopes.png"
import Refractor from"../images/Refractor.png"
import generator from "../images/generator.png"
import weather from "../images/weather.png"
import Navbar from 'react-bootstrap/Navbar';
import "./Resources.css"


function Resources() {
  return (
    <Container fluid>
      <Row>
        <Col size="md-12">
          <Jumbotron>
            <h1>Portfolio</h1>
          </Jumbotron>
        </Col>
      </Row>
      <CardGroup>
  <Card>
    <Card.Img src={colorpicker} size="80px160"/>
    <Card.Body>
      <Card.Title>Color</Card.Title>
      <Card.Text>
      <Navbar.Brand href="https://github.com/Greg15323/Color_project">Github repository</Navbar.Brand>
      <br>
      </br>
      <Navbar.Brand href="https://colorproject.herokuapp.com/results">Deployed Site</Navbar.Brand>
      </Card.Text>
    </Card.Body>
  </Card>
  <Card>
    <Card.Img src={notetaker}  size="80px160" />
    <Card.Body>
      <Card.Title>Notes</Card.Title>
      <Card.Text>
      <Navbar.Brand href="https://github.com/JuanBoza/Note-Taker-">Github repository</Navbar.Brand>
      <br>
      </br>
      <Navbar.Brand href="https://jamesjtuckbc.github.io/Slippery-Slopes/">Deployed Site</Navbar.Brand>
      </Card.Text>
    </Card.Body>
  </Card>
  <Card>
    <Card.Img src={slipperyslopes}  size="80px160" />
    <Card.Body>
      <Card.Title>SlipperySlopes</Card.Title>
      <Navbar.Brand href="https://github.com/jamesjtuckbc/Slippery-Slopes">Github repository</Navbar.Brand>
      <br>
      </br>
      <Navbar.Brand href="https://jamesjtuckbc.github.io/Slippery-Slopes/">Deployed Site</Navbar.Brand>
    </Card.Body>
  </Card>
  <Card>
    <Card.Img src={dayplanner}  size="80px160" />
    <Card.Body>
      <Card.Title>Dayplanner</Card.Title>
      <Navbar.Brand href="https://github.com/JuanBoza/Day-Planner">Github repository</Navbar.Brand>
      <br>
      </br>
      <Navbar.Brand href="https://juanboza.github.io/Day-Planner/">Deployed Site</Navbar.Brand>
    </Card.Body>
  </Card>
</CardGroup>
<br>
</br>
<CardGroup>
<Card>
    <Card.Img src={Refractor}  size="80px160" />
    <Card.Body>
      <Card.Title>Code Refractor</Card.Title>
      <Navbar.Brand href="https://github.com/JuanBoza/Code-Refractor-">Github repository</Navbar.Brand>
      <br>
      </br>
      <Navbar.Brand href="https://juanboza.github.io/Code-Refractor-/">Deployed Site</Navbar.Brand>
    </Card.Body>
  </Card>
  <Card>
    <Card.Img src={generator}  size="80px160" />
    <Card.Body>
      <Card.Title>Password Generator</Card.Title>
      <Navbar.Brand href="https://github.com/JuanBoza/Password-Generator-">Github repository</Navbar.Brand>
      <br>
      </br>
      <Navbar.Brand href="https://juanboza.github.io/Password-Generator-/">Deployed Site</Navbar.Brand>
    </Card.Body>
  </Card>
  <Card>
    <Card.Img src={weather}  size="80px160" />
    <Card.Body>
      <Card.Title>Weather Dashboard</Card.Title>
      <Navbar.Brand href="https://github.com/JuanBoza/Weather-Dashboard">Github repository</Navbar.Brand>
      <br>
      </br>
      <Navbar.Brand href="https://juanboza.github.io/Weather-Dashboard/">Deployed Site</Navbar.Brand>
    </Card.Body>
  </Card>
  </CardGroup>

    </Container>
  );
}

export default Resources;
