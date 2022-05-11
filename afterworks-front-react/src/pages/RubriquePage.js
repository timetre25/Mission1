import React, { useEffect, useState } from "react";
import {Link, useParams} from "react-router-dom";
import API from "../services/API";
import AddRubrique from "./AddRupriquePage";
import AddArticle from "./AddArticle";
import AddEmploye from "./AddEmploye";
import DeleteRubrique from "./DeleteRubrique";

const RubriquePage = () =>{

    const [rubriques, setRubriques] = useState([]);

    const fetchRubriques = async () => {
        try {
            const _rubriques = await API.getRubriques();
            setRubriques(_rubriques);
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        fetchRubriques();
    }, []);


    return (
        <div className="container">
            <h2 className="text-center m-5">Liste des rubriques</h2>

            {rubriques.map((r)=> {
                return (

                    <div className="card-body">
                        <Link to={`/${r?.idRubrique}/articles`}><h5 className="card-title">{r?.titre}</h5></Link>
                        <p className="card-text">{r?.description}</p>

                    </div>
                )


            })}


        </div>


    )
}
export default RubriquePage