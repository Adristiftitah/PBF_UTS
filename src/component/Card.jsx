import React, { Component } from 'react';
import ReactCardCarousel from 'react-card-carousel';
import Card from "react-bootstrap/Card";
import { ListGroup, ListGroupItem } from 'reactstrap';
import Prod1 from "./img/1.jpg";
import Prod2 from "./img/2.jpg";
import Prod3 from "./img/3.jpg";

class MyCarousel extends Component {
    render() {
      return (
        <div>
          <br />
        <ReactCardCarousel autoplay={ true } autoplay_speed={ 2500 }>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={Prod1} />
            <Card.Body>
              <Card.Title>Sharp ES-T65MW</Card.Title>
                <Card.Text>
                    Mesin cuci Sharp termasuk cukup diminati, termasuk untuk jenis 2 tabung. Salah satunya Sharp ES-T65MW yang memiliki 2 tabung dengan fungsi untuk proses mencuci dan satu tabung lainnya untuk pengering.
                </Card.Text>
                </Card.Body>
                <Card.Body>
                  <Card.Link href="product">Buy Now</Card.Link>
              </Card.Body>
          </Card>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={Prod2} />
            <Card.Body>
                <Card.Title>Sharp ES-T85CR</Card.Title>
                  <Card.Text>
                  Sharp ES-T85CR adalah salah satu mesin cuci Sharp dengan performa cukup handal. Harga mesin cuci Sharp dengan 2 tabung ini sangat murah dan menawarkan berbagai fitur menarik di dalamnya.
                </Card.Text>
                </Card.Body>
                <Card.Body>
                  <Card.Link href="product">Buy Now</Card.Link>
                </Card.Body>
          </Card>
          <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src={Prod3} />
                <Card.Body>
                    <Card.Title>Sharp ES-T95CR</Card.Title>
                    <Card.Text>
                    Sharp ES-T95CR adalah mesin cuci murah Rp 1 jutaan yang mumpuni. Mesin cuci ini dilengkapi dengan beberapa fitur utama seperti Super Aquamagic, soakmagic serta double pulsator.
                    </Card.Text>
                </Card.Body>
                <Card.Body>
                    <Card.Link href="product">Buy Now</Card.Link>
                </Card.Body>
            </Card>
        </ReactCardCarousel>
        </div>
      );
    }
  }
  
  export default MyCarousel;