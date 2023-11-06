import { faPlusSquare, faSave, faUndo } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import {Card,Form,Button,Col} from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";

class Voiture extends React.Component {
    constructor(props) { 
        super(props); 
        this.state= this.initialState; 
        this.voitureChange = this.voitureChange.bind(this);
        this.submitVoiture = this.submitVoiture.bind(this);
    } 

    initialState = {marque:'', modele:'',couleur:'', immatricule:'',annee:'', prix:''};
    restVoiture = ()=>{
        this.setState(()=> this.initialState);
    };

    submitVoiture = event => {
         event.preventDefault(); 
         const voiture = {
            id:0,  
            marque:this.state.marque,
            modele:this.state.modele,
            couleur:this.state.couleur, 
            immatricule:this.state.immatricule,
            annee:this.state.annee, 
            prix:this.state.prix
         }
         axios.post("http://localhost:8080/api/voitures",voiture)
         .then(response => {
            if (response.data != null) {
                this.restVoiture()
                alert("Voiture enregistrée avec succés");
            }
         });
    } 
    voitureChange = event =>{ 
        this.setState ( {
        [event.target.name]:event.target.value } ) ; 
    }

    render() {
        return (
            <Card className={"border border-dark bg-dark text-white"}> 
                <Card.Header><FontAwesomeIcon icon={faPlusSquare} /> Ajouter Voiture</Card.Header>
                <Form onReset={this.resetVoiture} onSubmit={this.submitVoiture} id="VoitureFormId"> 
                    <Card.Body> 
                            <Form.Group as={Col}> 
                                <Form.Label> Marque </Form.Label>
                                <Form.Control name="marque" type="text" controlId="formGridMarque" className={"bg-dark text-white"} placeholder= "Entrez Marque Voiture" 
                                            value = {this.state.marque} onChange ={this.voitureChange} autoComplete="off"/>
                            </Form.Group>
                            <Form.Group as={Col}> 
                                <Form.Label> Modele </Form.Label>
                                <Form.Control name="modele" type="text"controlId="formGridModele" className={"bg-dark text-white"} placeholder= "Entrez Modele Voiture"
                                              value = {this.state.modele} onChange ={this.voitureChange}  autoComplete="off" />
                            </Form.Group>
                            <Form.Group as={Col}> 
                                <Form.Label> Couleur </Form.Label>
                                <Form.Control name="couleur" type="text"controlId="formGridCouleur" className={"bg-dark text-white"} placeholder= "Entrez couleur Voiture"
                                              value = {this.state.couleur} onChange ={this.voitureChange} autoComplete="off" />
                            </Form.Group>
                            <Form.Group as={Col}> 
                                <Form.Label> Immatricule </Form.Label>
                                <Form.Control name="immatricule" type="text"controlId="formGridImmatricule" className={"bg-dark text-white"} placeholder= "Entrez immatricule Voiture"
                                              value = {this.state.immatricule} onChange ={this.voitureChange} autoComplete="off" />
                            </Form.Group>
                            <Form.Group as={Col}> 
                                <Form.Label> Année </Form.Label>
                                <Form.Control name="annee" type="text"controlId="formGridAnnee" className={"bg-dark text-white"} placeholder= "Entrez annee"
                                              value = {this.state.annee} onChange ={this.voitureChange} autoComplete="off" />
                            </Form.Group>
                            <Form.Group as={Col}> 
                                <Form.Label> Prix </Form.Label>
                                <Form.Control name="prix" type="text"controlId="formGridPrix" className={"bg-dark text-white"} placeholder= "Entrez Prix"
                                              value = {this.state.prix} onChange ={this.voitureChange} autoComplete="off" />
                            </Form.Group>
                        
                    </Card.Body> 
                    <Card.Footer style={{ "textAlign": "right" }}>
                        <Button size="sm" variant="success" type="submit"><FontAwesomeIcon icon={faSave} /> Submit </Button> {' '}
                        <Button size="sm" variant="info" onClick={this.restVoiture} type="reset"><FontAwesomeIcon icon={faUndo} /> Reset </Button>
                    </Card.Footer>
                </Form>
            </Card>);
    }
} 
export default Voiture;