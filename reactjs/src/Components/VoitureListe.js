import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import {Card,Table,ButtonGroup,Button} from "react-bootstrap";
import { faEdit, faList, faTrash } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import {Link} from "react-router-dom";


class VoitureListe extends React.Component {
    constructor(props) { 
        super(props);
        this.state = {
            voitures : []
        };  
    } 

    componentDidMount(){
        axios.get("http://localhost:8080/voitures")
             .then(response => response.data)
             .then((data)=>{
                this.setState({voitures:data});
             });
    }

    deleteVoiture = (voitureId) => {
        axios.delete("http://localhost:8080/api/voitures/"+voitureId).then(response => {
            if(response.data != null){
                alert("Voiture supprimée avec succès.");
                this.setState({ voitures: this.state.voitures.filter(voiture => voiture.id !== voitureId)});
            }
        });
    };

    render() {
        return (
            <Card className={"border border-dark bg-dark text-white"} >
                <Card.Header><FontAwesomeIcon icon={faList} /> Liste Voitures </Card.Header>
                <Card.Body>
                    <Table  bordered hover striped variant="dark">
                        <thead>
                            <tr>
                                <th>Marque</th><th>Modele</th><th>Couleur</th><th>Immatricule</th><th>Annee</th><th>Prix</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.voitures.length === 0 ?
                                <tr align="center">
                                    <td colSpan="6">{this.state.voitures.length} Voitures disponibles</td>
                                </tr> 
                                :
                                this.state.voitures.map((voiture)=>(
                                    <tr key={voiture. id}>
                                        <td>{voiture.marque}</td>
                                        <td>{voiture.modele}</td>
                                        <td>{voiture.couleur}</td>
                                        <td>{voiture.immatricule}</td>
                                        <td>{voiture.annee}</td>
                                        <td>{voiture.prix}</td>
                                        <td>
                                            <ButtonGroup>
                                                            <Link to={"/edit/1"} className="btn btn-sm btn-outline-primary">
                                                                <FontAwesomeIcon icon={faEdit} />
                                                            </Link>{" "}                                                 
                                                            <Button size="sm" variant="outline-danger" onClick={this.deleteVoiture.bind(this,voiture.id)}> <FontAwesomeIcon icon={faTrash}/></Button>
                                            </ButtonGroup>
                                        </td>
                                    </tr> 
                                ))
                            }
                            
                        </tbody>
                    </Table>
                </Card.Body>
            </Card>
            );
    }
} 
export default VoitureListe;