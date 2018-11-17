import React, { Component } from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { addList } from "../actions";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Col, Row } from 'reactstrap';
import EasyTransition from 'react-easy-transition';

import './AddProduct.css'
import Formulaire from '../components/Formulaire';


class AddProduct extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      category: "",
      next_course: false,
      quantite: "",
      prix: "",
      modal: false,
    }
    this.save = this.save.bind(this);
    this.radioChange = this.radioChange.bind(this);
    this.sendState = this.sendState.bind(this);
    this.key = this.key.bind(this);
    this.toggle = this.toggle.bind(this);
    this.commandeValid = this.commandeValid.bind(this);
  }

  componentDidMount() {
    this.setState({
      category: "Fruit",
    })
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  save(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  radioChange() {
    this.setState({
      next_course: !this.state.next_course,
    })
  }

  sendState() {

    let data = {
      name: this.state.name,
      category: this.state.category,
      next_course: this.state.next_course,
      quantite: this.state.quantite,
      prix: this.state.prix,
    }


    this.props.addList(data);

    this.setState({
      name: "",
      next_course: false,
      quantite: "",
      prix: "",
    })
  }

  key(e) {
    if (e.charCode === 13 && this.state.toDo !== "") {
      this.sendState();
    }
  }

  commandeValid() {
    alert("Votre commande a bien été validé !!!");
    this.setState({
      modal: !this.state.modal,
    })
  }

  commander() {
    if (this.props.list.every(element => element.quantite === 0) || (this.props.list.length === 0)) {
      this.toggle()
    } else {
      this.commandeValid()
    }
  }

  render() {
    return (
      <div className={this.props.displayCat ? "AddProductTrue" : "AddProductFalse"} onKeyPress={this.key}>
        <Row>
          <Col>
            <Formulaire
              name={this.state.name}
              category={this.state.category}
              next_course={this.state.next_course}
              quantite={this.state.quantite}
              prix={this.state.prix}
              radioChange={this.radioChange}
              save={this.save}
            />
          </Col>
        </Row>
        <Row>
          <Col sm='9'>
            <div className="elementIn">
              <Button color="warning" onClick={(this.state.name === "") ? () => { } : () => this.sendState()}>Ajout</Button>
            </div>
            <div className="elementIn">
              <Button
                title={(this.props.list.every(element => element.quantite === 0) || (this.props.list.length === 0)) ? "Attention au quantité ^^" : "Vous pouvez continuer en toute securité"}
                color="success"
                onClick={() => this.commander()}>Commander</Button>
            </div>
            <div className="elementIn">

            </div>
          </Col>
          <Col sm='1'>
            <EasyTransition
              path={this.props.displayCat}
              initialStyle={{ opacity: 0 }}
              transition="opacity 0.3s ease-in"
              finalStyle={{ opacity: 1 }}
            >
              {this.props.displayCat &&
                <div>
                  <Row>
                    <Col sm={{ offset: '11' }}>
                      <Button className='boutonToUp' color='secondary' onClick={
                        () => window.scrollTo(0, 0)
                      }>
                        ⬆️
                                             </Button>
                    </Col>
                  </Row>
                </div>}
            </EasyTransition>

          </Col>
        </Row>



        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>Attention.</ModalHeader>
          <ModalBody>
            Vous avez un ou des produits qui sont sont vide, voulez vous continuer votre navigation?
                            </ModalBody>
          <ModalFooter>

            <Button color="secondary" onClick={() => this.toggle()}>Non</Button>
            <Button color="success" onClick={() => this.commandeValid()}>Oui</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

function mstp(state) {
  return {
    list: state.list_shopping,
  }
}

function mdtp(dispatch) {
  return bindActionCreators({ addList }, dispatch)
}

export default connect(mstp, mdtp)(AddProduct);