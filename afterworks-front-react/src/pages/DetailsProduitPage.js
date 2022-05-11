import { useEffect, useState } from "react";
import API from "../services/API";
import {useParams} from "react-router-dom"

const DetailsProduitPage = () =>{

    const idProduit = useParams();
    const [produit, setProduit] = useState([]);
    const fetchDetailsProduit = async () => {
        try {
            const data = await API.getDetailsProduitById(idProduit.idProduit);
            setProduit(data);
        } catch (e) {
            console.log(e);
        }
    }
    useEffect(() => {
        fetchDetailsProduit()
    }, [])

    return (
        <div>
            <h2>Hello Détails du produit n°{idProduit.idProduit}</h2>
            <h3>{produit.libelleProduit}</h3>
            <p>{produit.descriptionProduit}</p>
            <p>{produit?.idTva?.idTva}</p>

        </div>


    )
}
export default DetailsProduitPage