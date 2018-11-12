import React, { Component } from 'react';
import { Button, Row, Col, Modal, ModalHeader, ModalBody, ModalFooter, Alert } from 'reactstrap';
import { bindActionCreators } from "redux";
import { del, add_quantite, remove_quantite, edit } from "../actions";
import { connect } from "react-redux";

import './AffichageCard.css'
import Formulaire from '../components/Formulaire';

class AffichageCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: 0,
            name: "",
            category: "",
            next_course: false,
            quantite: "",
            prix: "",
            modal: false,
            visible: false,
        }
        this.toggle = this.toggle.bind(this);
        this.save = this.save.bind(this);
        this.radioChange = this.radioChange.bind(this);
        this.saveModif = this.saveModif.bind(this);
        this.onDismiss = this.onDismiss.bind(this);
    }

    toggle(items) {
        this.setState({
            id: items.id,
            name: items.name,
            category: items.category,
            next_course: items.next_course,
            quantite: items.quantite,
            prix: items.prix,
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

    saveModif(id) {
        this.props.edit({
            id: this.state.id,
            name: this.state.name,
            category: this.state.category,
            next_course: this.state.next_course,
            quantite: this.state.quantite,
            prix: this.state.prix,
        });
        let temps = setTimeout(() => {
            this.onDismiss()
        }
            , 1500);
        this.setState({
            visible: true,
            modal: !this.state.modal,
        })
    }

    onDismiss() {
        this.setState({ visible: false });
    }

    render() {
        return (
            <div className='AffichageCard'>
                <Alert className='alert' color="success" isOpen={this.state.visible} toggle={this.onDismiss}>
                    Le produit à bien été modifié.
                </Alert>
                {this.props.list.map(element =>
                    <div key={element.id} className={this.props.class}>
                        <Row>
                            <Col sm={{ size: 'auto' }}>
                                <h4 className='name'>{element.name}</h4>
                            </Col>
                            <Col sm={{ size: '4', offset: 1 }}>
                            </Col>
                        </Row>
                        <Row>
                            <Col className='text' sm={{ size: '3' }}>
                                Quantité : {element.quantite}
                            </Col>
                            <Col className='text' sm={{ size: '3', offset: '1' }}>
                                Prix : {element.prix} €
                        </Col>
                            <Col className='text' sm={{ size: '4', offset: '1' }}>
                                Total : {(Math.round(element.prix * element.quantite*100))/100} €
                        </Col>
                        </Row>
                        <Row className={(this.props.class !== "item") ? "itemTrue" : ""}>
                            <Col sm='1'>
                                <Button onClick={() => this.props.remove_quantite(element)} color='secondary'>-</Button>
                            </Col>
                            <Col sm='1'>
                                <Button onClick={() => this.props.add_quantite(element)} color='success'>+</Button>
                            </Col>
                            <Col sm={{ size: '1', offset: '2' }}>
                                <Button onClick={() => this.toggle(element)} color='warning'>Modif</Button>
                            </Col>
                            <Col sm={{ size: '1', offset: '3' }}>
                                <Button onClick={() => this.props.del(element.id)} color='danger'>Supprimer</Button>
                            </Col>
                        </Row>
                        <div className='ligne'> </div>
                        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                            <ModalHeader toggle={this.toggle}>{element.name}</ModalHeader>
                            <ModalBody>
                                <Formulaire
                                    name={this.state.name}
                                    category={this.state.category}
                                    next_course={this.state.next_course}
                                    quantite={this.state.quantite}
                                    prix={this.state.prix}
                                    radioChange={this.radioChange}
                                    save={this.save}
                                />
                            </ModalBody>
                            <ModalFooter>

                                <Button color="success" onClick={() => this.saveModif()}>Validé</Button>
                            </ModalFooter>
                        </Modal>
                    </div>
                )}

            </div>
        );
    }
}

function mdtp(dispatch) {
    return bindActionCreators({ del, add_quantite, remove_quantite, edit }, dispatch)
}


export default connect(null, mdtp)(AffichageCard);