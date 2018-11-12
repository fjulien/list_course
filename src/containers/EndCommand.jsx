import React, { Component } from 'react';
import { connect } from "react-redux";
import { Col, Row, Container, Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { Link } from 'react-router-dom'
import history from "../history";

import './EndCommand.css'
import AffichageCard from './AffichageCards';

class EndCommand extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: false
        };

        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        this.setState({
            modal: !this.state.modal
        });
    }
    render() {
        return (
            <div className='EndCommand'>
                <Container>
                    <Row>
                        <Col sm='6'>
                            <h2>Urgent</h2>
                            <AffichageCard
                                className="bordure_urgent"
                                list={this.props.list_urgent}
                            />
                        </Col>
                        <Col sm='6'>
                            <h2>Commande</h2>
                            <AffichageCard
                                className="bordure_classic"
                                list={this.props.list_command}
                            />

                        </Col>
                    </Row>
                    <Row className='boutonCommande'>
                        <Col sm='6'>
                            <Link to='/achat'><Button>Retour</Button></Link>
                        </Col>
                        <Col sm='6'>
                            <Button color='success' onClick={this.toggle}>Valider</Button>
                        </Col>

                        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                            <ModalHeader toggle={this.toggle}>Votre commande a bien été enregistée.</ModalHeader>
                            <ModalBody>
                                Merci et à bientot !
                            </ModalBody>
                            <ModalFooter>
                                <Button color="secondary" onClick={() => history.push('/')}>Retour</Button>{' '}
                            </ModalFooter>
                        </Modal>
                    </Row>
                </Container>
            </div>
        );
    }
}

function mstp(state) {
    return {
        list_command: state.list_shopping_command,
        list_urgent: state.list_shopping_urgent,
    }
}

export default connect(mstp)(EndCommand);