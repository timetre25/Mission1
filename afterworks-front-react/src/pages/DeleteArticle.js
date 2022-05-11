import React, {useEffect, useState} from "react";
import API from "../services/API";

const DeleteEmploye = () => {

    const [article, setArticle] = useState();
    const [articles, setArticles] = useState([]);
    const [numArticle, setNumArticle] = useState();



    const fetchAllArticles = async () => {
        try {
            const data = await API.getArticles();
            setArticles(data);
        } catch (e) {
            console.log(e);
        }
    }

    const fetchArticleById = async (id) => {
        try {
            setNumArticle(id)
            const data = await API.getArticleById(id);
            setArticle(data);
        } catch (e) {
            console.log(e);
        }
    }

    useEffect(() => {
        fetchAllArticles()
    }, [])

    const handleSubmit = async (e) => {
        e.preventDefault();
        await API.deleteArticle(numArticle);
    }


    return(
        <div className="container">
            <div className="mb-3">
                <label htmlFor="numeroEmploye" className="form-label">Selectioner l'employe à supprmier</label>
                <select className="form-select" id="numeroEmploye" onChange={e => fetchEmployeById(e.target.value)}>
                    {employes.map((e) => {
                        return <option value={e.idEmploye}>{e.nom} {e.prenom}</option>
                    })}
                </select>
            </div>
            <form onSubmit={handleSubmit}>
                <button type="submit" className="btn btn-primary">Valider</button>
            </form>
        </div>
    )
}

export default DeleteEmploye;