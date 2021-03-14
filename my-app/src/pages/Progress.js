import React from "react";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Nav from 'react-bootstrap/Nav';
import colorpicker from "../images/colorpicker.png";
import "./Progress.css"


function Progress () {
  return (
    <Container fluid>
      <Row>
        <Col size="md-12">
          <Jumbotron>
            <h1>Profile</h1>
          </Jumbotron>
        </Col>
      </Row>
      <CardGroup>
  <Card>
  <Card.Img src={colorpicker} size="80px160"/>
    <Card.Body>
      <Card.Title>About</Card.Title>
      <Card.Text>
        Hello my name is Juan Boza and I am currently a University of Utah Fullstack developer student. 
      </Card.Text>
    </Card.Body>
   
  </Card>
  <Card>
    
    <Card.Body>
      <Card.Title>Contact Info</Card.Title>
      <Card.Text>
      <Nav.Link >Phone Number: 801-413-9571</Nav.Link>
          <Nav.Link href="mailto: u0916447@utah.edu">Umail</Nav.Link>
          <Nav.Link href="mailto: JuanBoza80@gmail.com">Gmail</Nav.Link>
          
      </Card.Text>
    </Card.Body>
    
  </Card>
 
</CardGroup>
    </Container>
  );
}

export default Progress;
