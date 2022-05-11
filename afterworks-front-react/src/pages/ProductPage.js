import React, { useEffect, useState } from "react";
import {Link, useParams} from "react-router-dom";
import API from "../services/API";
import ProductPageByCate from "./ProductByCategPage";
//import '../product.css'


const ProductPage = () =>{

    const [categories, setCategories] = useState([]);


    const fetchCategories = async () => {
        try {
            const _categories = await API.getCategories();
            setCategories(_categories);
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        fetchCategories();
    }, []);


    return (
        <div>
            <h1 className="text-center m-5">Liste des catégories</h1>

            <div className="card mt-3 " >


            </div>
            {categories.map((c)=>{
                return (

                    <div className="card-body">
                        <Link to={`/${c?.idCategorie}/produits`}><h5 className="card-title">{c?.libelleCategorie}</h5></Link>
                        <p className="card-text">{c?.descriptionCategorie}</p>

                    </div>
                )
            })}
            </div>




    )
}
export default ProductPage