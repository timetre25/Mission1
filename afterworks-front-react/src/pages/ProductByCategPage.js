import React, { useEffect, useState } from "react";
import {Link, useParams} from "react-router-dom";
import {Card} from "react-bootstrap"

import API from "../services/API";
import ProductPage from "./ProductPage";

const ProductPageByCate = () =>{

    const idCategorie = useParams()
    const idProduit = useParams()
    const [produits, setProduits] = useState([]);
    const [commentaires, setCommentaires] = useState([]);

    const fetchCommentairesByProduct = async () => {
        try {
            const _commentaires = await API.getCommentaireByProduct(idProduit.idProduit);
            setCommentaires(_commentaires);
        } catch (err) {
            console.log(err);
        }
    };
    const fetchProduitsByCateg = async () => {
        try {
            const _produits = await API.getProductByCategory(idCategorie.idCategorie);
            setProduits(_produits);
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        fetchProduitsByCateg();
        fetchCommentairesByProduct()
    }, []);

    return (
        <div className="container">

            <h2 className="text-center m-5">Liste des produits de la categorie {idCategorie?.idCategorie}</h2>
            <div className="row mt-5" >
            {produits.map((p)=> {
            return (
                <Card style={{ width: '350px', height:'400 px', marginBottom:"50px", margin:"15px"}}>
                <div  className="col-sm">

                        <img className="card-img-top" src="https://www.pngplay.com/wp-content/uploads/7/Cafe-Logo-Background-PNG-Image.png" alt="Card image cap"/>
                        <div className="card-body">
                            <h5 className="card-title">{p?.libelleProduit}</h5>

                            <button type="button" className="btn btn-primary m-3" data-toggle="modal"
                                    data-target="#exampleModal">Détails
                            </button>

                            <button type="button" className="btn btn-primary m-3" data-toggle="modal"
                                    data-target="#ajoutModal">Ajouter
                            </button>

                            <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog"
                                 aria-labelledby="exampleModalLabel" aria-hidden="true">
                                <div className="modal-dialog" role="document">
                                    <div className="modal-content">
                                        <div className="modal-header">
                                            <h5 className="modal-title" id="exampleModalLabel"> {p?.libelleProduit}</h5>
                                            <button type="button" className="close" data-dismiss="modal"
                                                    aria-label="Close">
                                                <span aria-hidden="true">&times;</span>
                                            </button>
                                        </div>
                                        <div className="modal-body">
                                            <img width="150px"
                                                 src="https://www.pngplay.com/wp-content/uploads/7/Cafe-Logo-Background-PNG-Image.png"/>
                                            <h5>Description Produit</h5>
                                            <p>{p?.descriptionProduit}</p>
                                            <h6>TVA</h6>
                                            <p>{p?.idTva?.pourcentagetva} %</p>
                                            <h6>Catégorie</h6>
                                            <p>{p?.idCategorie?.libelleCategorie}</p>
                                            <h6>Prix Unitaite HT</h6>
                                            <p>{p?.prixUnitaireHt} euros</p>


                                        </div>
                                        <div className="modal-footer">
                                            <button type="button" className="btn btn-primary"
                                                    data-dismiss="modal">Fermer
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="modal fade" id="ajoutModal" tabIndex="-1" role="dialog"
                                 aria-labelledby="exampleModalLabel" aria-hidden="true">
                                <div className="modal-dialog" role="document">
                                    <div className="modal-content">
                                        <div className="modal-header">
                                            <h5 className="modal-title" id="exampleModalLabel"> Fonctionnalité à venir.</h5>
                                            <button type="button" className="close" data-dismiss="modal"
                                                    aria-label="Close">
                                                <span aria-hidden="true">&times;</span>
                                            </button>
                                        </div>

                                            <button type="button" className="btn btn-primary"
                                                    data-dismiss="modal">Fermer
                                            </button>
                                    </div>
                                </div>
                            </div>

                        </div>

                </div>
                </Card>


            )



            })}

            </div>
            </div>


    )
}
export default ProductPageByCate