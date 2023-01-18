import React from "react";
import "../components/infopune.css";
import img1 from "../images/infopuneimages/lost-and-found.svg";
import img2 from '../images/infopuneimages/police-recruitment.svg';
import img3 from '../images/infopuneimages/tenant-information.svg';
import img4 from '../images/infopuneimages/missing-person.svg';
import img5 from '../images/infopuneimages/accident-compensation.svg';
import img6 from '../images/infopuneimages/stolen-unclaimed-vehicle.svg';
import { Row, Col, Container } from "react-bootstrap";

export const Infopune = () => {
  return (
    <div className="row">

        <div>
        <div id="header">पुणेकरांनी सर्वाधिक वापरले</div>
        <div id="sub_header">
          'लॉस्ट अँड फाउंड' पासून ते 'भाडेकरू माहिती' पर्यंत आणि त्यामधील
          प्रत्येक गोष्ट,
          <br />
          आम्ही तुमच्यासाठी आमच्या सर्वाधिक वापरल्या जाणाऱ्या विभागांच्या जलद
          दुवे <br />
          सूचीबद्ध केले आहेत.
        </div>
        </div>
        <Container >
        <Row >
          <Col>
            <Row>
          <Col className="bg-success rounded-3 text-center rounded-circle mx-2">
          <img src={img1} className='p1'/>
          </Col >
          </Row>
          <Row>
            <Col className="text-center">हरवले आणि सापडले</Col>
          </Row>
          </Col>
          
          <Col>
            <Row>
          <Col className="bg-success rounded-3 text-center rounded-circle mx-2">
          <img src={img2} className='p1'/>
          </Col >
          </Row>
          <Row>
            <Col className="text-center">हरवले आणि सापडले</Col>
          </Row>
          </Col>

          <Col>
            <Row>
          <Col className="bg-success rounded-3 text-center rounded-circle mx-2">
          <img src={img1} className='p1'/>
          </Col >
          </Row>
          <Row>
            <Col className="text-center">हरवले आणि सापडले</Col>
          </Row>
          </Col>

          <Col>
            <Row>
          <Col className="bg-success rounded-3 text-center rounded-circle mx-2">
          <img src={img1} className='p1'/>
          </Col >
          </Row>
          <Row>
            <Col className="text-center">हरवले आणि सापडले</Col>
          </Row>
          </Col>

          <Col>
            <Row>
          <Col className="bg-success rounded-3 text-center rounded-circle mx-2">
          <img src={img1} className='p1'/>
          </Col >
          </Row>
          <Row>
            <Col className="text-center">हरवले आणि सापडले</Col>
          </Row>
          </Col>

          <Col>
            <Row>
          <Col className="bg-success rounded-3 text-center rounded-circle mx-2">
          <img src={img1} className='p1'/>
          </Col >
          </Row>
          <Row>
            <Col className="text-center">हरवले आणि सापडले</Col>
          </Row>
          </Col>
        </Row>
        </Container>
    </div>
  );
}
