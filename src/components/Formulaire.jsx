import React from 'react';
import {
    InputGroup, InputGroupAddon, InputGroupText, Input
} from 'reactstrap'

const Formulaire = (props) => {
    return (
        <div className="Formulaire">
            <div className="elementIn">
                <InputGroup size="lg">
                    <InputGroupAddon className="labelSize" addonType="prepend">Produit</InputGroupAddon>
                    <Input autoFocus='autoFocus' title="Ajout du nom du produit que vous voulez ajouter à votre liste de course" value={props.name} onChange={props.save} type="text" name="name" />
                </InputGroup>
            </div>
            <div className="elementIn">
                <InputGroup size="lg">
                    <InputGroupAddon addonType="prepend">{props.category}</InputGroupAddon>
                    <Input title={props.category} value={props.category} onChange={props.save} type="select" name="category">
                        <option title="Fruit" selected value="Fruit">🥝 🍌 🍇 . . .</option>
                        <option title="Legume" value="Legume">🥔 🥑 🍆 . . .</option>
                        <option title="Viande" value="Viande">🍖 🍗 🥓 . . .</option>
                        <option title="Poisson" value="Poisson">🦐 🐟 🦀 . . .</option>
                        <option title="Laitier" value="Laitier">🥛 🧀 🍶 . . .</option>
                        <option title="Autre" value="Autre">👽 👻 👾 . . .</option>
                    </Input>
                </InputGroup>
            </div>
            <div className="elementIn">
                <InputGroup onClick={props.radioChange} name="next_course" size="lg">
                    <Input title="Les produits seront disponible le soir même si vous commander le matin ou le lendemain pour pour toute commande passée apres midi.*" value="Urgent" className={(!props.next_course) ? "next_true" : "next_false"} />
                    <InputGroupAddon addonType="append">
                        <InputGroupText>
                            <Input addon type="radio" checked={props.next_course} aria-label="Checkbox for following text input" />
                        </InputGroupText>
                    </InputGroupAddon>
                </InputGroup>
            </div>
            <div className="elementIn">
                <InputGroup size="lg">
                    <InputGroupAddon className="labelSize" addonType="prepend">Quantité</InputGroupAddon>
                    <Input value={props.quantite} onChange={props.save} type="number" name='quantite' />
                </InputGroup>
            </div>
            <div className="elementIn">
                <InputGroup size="lg">
                    <InputGroupAddon className="labelSize" addonType="prepend">Prix</InputGroupAddon>
                    <Input value={props.prix} onChange={props.save} type="number" name='prix' />
                </InputGroup>
            </div>
        </div>
    );
}

export default Formulaire;