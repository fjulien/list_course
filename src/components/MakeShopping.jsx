import React, { Component } from 'react';
import AddProduct from "../containers/AddProduct";
import ListProduct from "../containers/List_Product";
import { Container, Row, Col } from 'reactstrap';

import './MakeShopping.css'

class MakeShopping extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayCat: false,
    }
    this.ecout = this.ecout.bind(this);
  }

  componentDidMount() {
   this.setState({
      displayCat: false,
    })
  }

  componentDidUpdate() {
    window.addEventListener('scroll', this.ecout);
  }

  ecout(e) {
    if (e.pageY > 60) {
      this.setState({
        displayCat: true,
      })
    } else {
      this.setState({
        displayCat: false,
      })
    }
  }

  render() {
    return (
      <Container>
        <h1 className='titreCentrer'>Créer votre liste de course</h1>
        <Row>
          <Col sm='6'>
            <AddProduct
              displayCat={this.state.displayCat} />
          </Col>
          <Col sm='6'>
            <ListProduct
              displayCat={this.state.displayCat} />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default MakeShopping;

