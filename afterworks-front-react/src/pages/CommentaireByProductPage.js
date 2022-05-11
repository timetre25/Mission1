import React, { useEffect, useState } from "react";
import {Link, useParams} from "react-router-dom";

import API from "../services/API";
import ProductPage from "./ProductPage";

const CommentaireByProduct = () =>{

    const idProduit = useParams()
    const [commentaires, setCommentaires] = useState([]);


    const fetchCommentairesByProduct = async () => {
        try {
            const _commentaires = await API.getCommentaireByProduct(idProduit.idProduit);
            setCommentaires(_commentaires);
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        fetchCommentairesByProduct();
    }, []);

    return (
        <div>


        </div>


    )
}
export default CommentaireByProduct