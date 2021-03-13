import React from "react";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import stress from "../images/colorpicker.png";
import notetaker from "../images/notetaker.png"
import dayplanner from "../images/dayplanner.png"
import slipperyslopes from "../images/slipperyslopes.png"


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
    <Card.Img src={stress} size="80px160"/>

  </Card>
  <Card>
    <Card.Img src={notetaker}  size="80px160" />
  </Card>
  <Card>
    <Card.Img src={slipperyslopes}  size="80px160" />
  </Card>
  <Card>
    <Card.Img src={dayplanner}  size="80px160" />
  </Card>
</CardGroup>
    </Container>
  );
}

export default Resources;
