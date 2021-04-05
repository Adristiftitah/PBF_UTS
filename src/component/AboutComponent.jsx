import React, { Component } from "react";
import '../index.css';
// import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from "react-bootstrap/Card";
import '../App.css';
import Profil from "./img/prof.jpg";

const AboutComponent = () => {
  return (
      <div className="App">
        <center>
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={Profil} />
        <Card.Body>
        <Card.Title>Adristi Iftitah Yuniar</Card.Title>
            <Card.Text>
            <a>1841720015 / 02 / TI-3H</a>
            <br/>
            <a>D e v e l o p e r</a>
            </Card.Text>
        </Card.Body>
        </Card>
        </center>
      </div>
  )
}

export default AboutComponent;