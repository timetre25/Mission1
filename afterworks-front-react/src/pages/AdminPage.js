import React, { useEffect, useState } from "react";
import {Link} from "react-router-dom";
import API from "../services/API";
import AddEmploye from "./AddEmploye";
import UpdateEmploye from "./UpdateEmployePage";
import DeleteEmploye from "./DeleteEmploye";
import AddRubrique from "./AddRupriquePage";
import AddArticle from "./AddArticle";
import DeleteRubrique from "./DeleteRubrique";
import {Card} from "react-bootstrap";

const AdminPage = () =>{


    const [employes, setEmployes] = useState([]);

    const fetchEmployes = async () => {
        try {
            const _employes = await API.getEmployes();
            setEmployes(_employes);
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        fetchEmployes();
    }, []);


    return (

        <div className="container">
            <h1 className="text-center mb-5 mt-3">Dashboard</h1>
            <h3 className="mt-3 text-center text-bold text-info mb-4"> Liste des employées</h3>
            <table className="table table-hover">
                <thead>
                <tr className="text-center border-dark">
                    <th scope="col">Nom</th>
                    <th scope="col">Prénom</th>
                    <th scope="col">Mail</th>
                    <th scope="col">Tel</th>
                    <th scope="col">Role</th>
                </tr>
                </thead>
                <tbody>


                {employes.map((d)=> {
                    return <tr className="text-center " >
                        <td>{d?.nom}</td>
                        <td>{d?.prenom}</td>
                        <td>{d?.mail}</td>
                        <td>{d?.tel}</td>
                        <td>{d?.idRole?.libelleRole}</td>
                    </tr>
                })}
                </tbody>
            </table>
            <div className="row mt-5" >
                <h3 className="text-center text-info"> Managment </h3>
                <h5> Gérer les rubriques</h5>

                <Card style={{ width: '270px', height:'400 px', marginBottom:"50px",  border:"none"}}>
                    <div className="p-3">
                    <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#modalRubrique">
                        Ajouter une rubrique
                    </button>
                    <div className="modal" id="modalRubrique">
                        <div className="modal-dialog">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h4 className="modal-title">Ajouter une rubrique</h4>
                                    <button type="button" className="close" data-dismiss="modal">&times;</button>
                                </div>
                                <div className="modal-body">
                                    <AddRubrique/>
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-danger" data-dismiss="modal">Fermer</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                </Card>
                <Card style={{ width: '350px', height:'400 px', marginBottom:"50px",  border:"none"}}>

                <div className="p-3">
                    <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#modalArticle">
                        Ajouter un article
                    </button>
                    <div className="modal" id="modalArticle">
                        <div className="modal-dialog">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h4 className="modal-title">Ajouter un article</h4>
                                    <button type="button" className="close" data-dismiss="modal">&times;</button>
                                </div>
                                <div className="modal-body">
                                    <AddArticle/>
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-danger" data-dismiss="modal">Fermer</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                </Card>
                <Card style={{ width: '350px', height:'400 px', marginBottom:"50px", border:"none"}}>

                <div className="p-3">
                    <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#modaldelr">
                        Supprimer une rubrique
                    </button>
                    <div className="modal" id="modaldelr">
                        <div className="modal-dialog">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h4 className="modal-title">Sélectionner une rubrique à supprimer :</h4>
                                    <button type="button" className="close" data-dismiss="modal">&times;</button>
                                </div>
                                <div className="modal-body">
                                    <DeleteRubrique/>
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-danger" data-dismiss="modal">Fermer</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                </Card>

            </div>
            <div className="row mt-5" >
                <h5> Gérer les Employés</h5>
            <Card style={{ width: '350px', height:'400 px', marginBottom:"50px",  border:"none"}}>

            <div className="p-3">
                <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#modalEmploye">
                    Ajouter un employé
                </button>
                <div className="modal" id="modalEmploye">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h4 className="modal-title">Ajouter un employé</h4>
                                <button type="button" className="close" data-dismiss="modal">&times;</button>
                            </div>
                            <div className="modal-body">
                                <AddEmploye/>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-danger" data-dismiss="modal">Fermer</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </Card>
            <Card style={{ width: '350px', height:'400 px', marginBottom:"50px",  border:"none"}}>

            <div className="p-3">
                <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#modalMDP">
                    Modifier un employé
                </button>
                <div className="modal" id="modalMDP">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h4 className="modal-title">Modifier le mot de passe d'un employé</h4>
                                <button type="button" className="close" data-dismiss="modal">&times;</button>
                            </div>
                            <div className="modal-body">
                                <UpdateEmploye/>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-danger" data-dismiss="modal">Fermer</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </Card>

            <Card style={{ width: '350px', height:'400 px', marginBottom:"50px",  border:"none"}}>

            <div className="p-3">
                <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#modalsup">
                    Révoquer un employé
                </button>
                <div className="modal" id="modalsup">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h4 className="modal-title">Séléctionner l'employé à révoquer</h4>
                                <button type="button" className="close" data-dismiss="modal">&times;</button>
                            </div>
                            <div className="modal-body">
                                <DeleteEmploye/>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-danger" data-dismiss="modal">Fermer</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </Card>
            </div>



        </div>



    )


}


export default AdminPage