import React, { Component } from 'react';
import { connect } from "react-redux";
import { Button, Row, Col } from 'reactstrap';
import './List_Product.css'
import AffichageCard from './AffichageCards';
import EasyTransition from 'react-easy-transition';


class List_Product extends Component {
    constructor(props) {
        super(props);
        this.state = {
            categories: "",
        }
        this.changeCategory = this.changeCategory.bind(this);
    }

    componentDidMount() {
        this.setState({
            categories: "Fruit",
        })
    }

    changeCategory(e) {
        this.setState({
            categories: e.target.name,
        })
    }

   

    render() {
        return (
            <div className={this.props.displayCat && "List_ProductTrue"}>
                <EasyTransition
                    path={this.props.displayCat}
                    initialStyle={{ opacity: 0 }}
                    transition="opacity 0.3s ease-in"
                    finalStyle={{ opacity: 1 }}
                >
                    {!this.props.displayCat &&
                        <div className='menu'>
                            <Row>
                                <Col className="boutonCat" sm='4'>
                                    <Button title="Fruit" color='info' name='Fruit' onClick={this.changeCategory}>
                                        🥝 🍌 🍇
                        </Button>
                                </Col>
                                <Col className="boutonCat" sm='4'>
                                    <Button title="Legume" color='warning' name='Legume' onClick={this.changeCategory}>
                                        🥔 🥑 🍆
                        </Button>
                                </Col>
                                <Col className="boutonCat" sm='4'>
                                    <Button title="Viande" color='info' name='Viande' onClick={this.changeCategory}>
                                        🍖 🍗 🥓
                        </Button>
                                </Col>
                            </Row>
                            <Row>
                                <Col className="boutonCat" sm='4'>
                                    <Button title="Poisson" color='warning' name='Poisson' onClick={this.changeCategory}>
                                        🦐 🐟 🦀
                        </Button>
                                </Col>
                                <Col className="boutonCat" sm='4'>
                                    <Button title="Laitier" color='info' name='Laitier' onClick={this.changeCategory}>
                                        🥛 🧀 🍶
                        </Button>
                                </Col>
                                <Col className="boutonCat" sm='4'>
                                    <Button title="Autre" color='warning' name='Autre' onClick={this.changeCategory}>
                                        👽 👻 👾
                        </Button>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <h3 className='title'>{this.state.categories} :</h3>
                                </Col>
                            </Row>
                        </div>}


                </EasyTransition>
                

                <AffichageCard
                    class="item"
                    list={this.props.list.filter(cat => cat.category === this.state.categories)}
                />

            </div >
        );
    }
}

function mstp(state) {
    return {
        list: state.list_shopping,
    }
}


export default connect(mstp)(List_Product);



