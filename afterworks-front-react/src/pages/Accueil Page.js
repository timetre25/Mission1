import React, {useEffect, useState} from "react";
import API from "../services/API";
import '../acceuil.css'
import {Link} from "react-router-dom";

const AccueilPage = () => {



    return(
        <section id="hero">
            <div className="hero-container" data-aos="zoom-in" data-aos-delay="100">
                <h1>Brulerie Comtoise</h1>
                <h2>Bienvenue sur le site de la Brulerie Comtoise. </h2>
                <Link to={`/produits`}><a href="#about" className="btn-get-started">Parcourir</a></Link>
            </div>
        </section>
    )
}

export default AccueilPage;