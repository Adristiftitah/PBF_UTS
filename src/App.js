import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
  Link,
} from "react-router-dom";
import { Nav, Navbar, Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import AboutComponent from './component/AboutComponent';
import ProductComponent from './component/ProductComponent';
import KeranjangComponent from './component/KeranjangComponent';
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { faInfo } from "@fortawesome/free-solid-svg-icons";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import ReactCardCarousel from 'react-card-carousel';
import MyCarousel from "./component/Card";

export default function Tugas() {
  return (
    <Router>
        <div>
        <Navbar bg="info" expand="lg">
          <Navbar.Brand href="Home"><b>Cuci-Cuci Mesin Store</b></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="Home"><FontAwesomeIcon icon={faHome} /><b> Beranda</b></Nav.Link>
              <Nav.Link href="product"><b>Mesin Cuci</b></Nav.Link>
              <Nav.Link href="about"><FontAwesomeIcon icon={faInfo} /><b> About</b></Nav.Link>
            </Nav>
            <Nav inline>
              <Nav.Link href="cart"><FontAwesomeIcon icon={faCartPlus} /><b> Cart</b></Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
          <div className="content">
            <Route exact path="/Home" component={Home}/>
            <Route exact path="/product" component={ProductComponent}/>
            <Route path="/about" component={AboutComponent}/>
            <Route path="/cart" component={KeranjangComponent}/>
          </div>
        </div>
      </Router>
  );
}

function Home() {
  return (
    <div className="sambutan">
      <div>
      <center>
      <Card className="text-center">
        <Card.Body>
          <Card.Title>Welcome to Cuci-Cuci Mesin Store</Card.Title>
          <Card.Text>
          Happy Shopping !!
          </Card.Text>
          <a href="product"><Button variant="primary">Cek Mesin Cuci</Button></a>
        </Card.Body>
      </Card>
      <br />
      <br/>
      </center>
      </div>
      <div className="carousel">
      <MyCarousel></MyCarousel>
    </div>
    </div>
    
  );
}
