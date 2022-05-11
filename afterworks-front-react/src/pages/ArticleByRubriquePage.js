import React, { useEffect, useState } from "react";
import {Link, useParams} from "react-router-dom";
import API from "../services/API";
import ProductPage from "./ProductPage";
import {Card} from "react-bootstrap"


const ArticleByRubrique = () =>{

    const idRubrique = useParams()
    const [articles, setArticles] = useState([]);


    const fetchArticles = async () => {
        try {
            const _articles = await API.getArticleByRubrique(idRubrique.idRubrique);
            setArticles(_articles);
        } catch (err) {
            console.log(err);
        }
    };




    useEffect(() => {
        fetchArticles();
    }, []);
    console.log(articles)


    return (
        <div className="container">

            <h2 className="text-center m-5">Liste des articles de la rubrique {idRubrique.idRubrique}</h2>
            <div className="row mt-5" >

            {articles.map((p)=> {
            return (
                <Card style={{ width: '350px', height:'400 px', marginBottom:"50px", margin:"15px"}}>

                <div className="col-sm">
                        <img className="card-img-top" src="https://cdn-icons-png.flaticon.com/512/88/88167.png" alt="Card image cap"/>
                        <div className="card-body">
                            <h5 className="card-title">{p?.titre}</h5>
                            <p className="card-text">{p?.contenu}</p>

                            <button type="button" className="btn btn-primary mt-3" data-toggle="modal"
                                    data-target="#exampleModal">Détails
                            </button>

                            <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog"
                                 aria-labelledby="exampleModalLabel" aria-hidden="true">
                                <div className="modal-dialog" role="document">
                                    <div className="modal-content">
                                        <div className="modal-header">
                                            <h5 className="modal-title" id="exampleModalLabel"> {p?.titre}</h5>
                                            <button type="button" className="close" data-dismiss="modal"
                                                    aria-label="Close">
                                                <span aria-hidden="true">&times;</span>
                                            </button>
                                        </div>
                                        <div className="modal-body">
                                            <img width="150px"
                                                 src="https://cdn-icons-png.flaticon.com/512/88/88167.png"/>
                                            <h5 className="mt-3">Contenu</h5>
                                            <p>{p?.contenu}</p>
                                            <h6>Auteur</h6>
                                            <p>{p?.idEmploye?.prenom} {p?.idEmploye?.nom}</p>
                                            <h6>Rubrique</h6>
                                            <p>{p?.idRubrique?.titre}</p>



                                        </div>
                                        <div className="modal-footer">
                                            <button type="button" className="btn btn-primary"
                                                    data-dismiss="modal">Fermer
                                            </button>
                                        </div>
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
export default ArticleByRubrique