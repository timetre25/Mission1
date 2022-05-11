import React, {useEffect, useState} from "react";
import API from "../services/API";

const AddArticle = () => {

    const [titre, setTitre] = useState("");
    const [auteur, setAuteur] = useState("");
    const [auteurs, setAuteurs] = useState([]);
    const [numAuteur, setNumAuteur] = useState("");
    const [contenu, setContenu] = useState("");
    const [rubrique, setRubrique] = useState("");
    const [rubriques, setRubriques] = useState([]);
    const [numRubrique, setNumRubrique] = useState();


    const fetchAllRubriques= async () => {
        try {
            const data = await API.getRubriques();
            setRubriques(data);
        } catch (e) {
            console.log(e);
        }
    }
    const fetchAllAuteurs= async () => {
        try {
            const data = await API.getEmployes();
            setAuteurs(data);
        } catch (e) {
            console.log(e);
        }
    }
    const fetchRubriqueById = async (id) => {
        try {
            setNumRubrique(id)
            const data = await API.getRubriqueById(id);
            setRubrique(data);
        } catch (e) {
            console.log(e);
        }
    }
    const fetchAuteurById = async (id) => {
        try {
            setNumAuteur(id)
            const data = await API.getEmployeById(id);
            setAuteur(data);
        } catch (e) {
            console.log(e);
        }
    }

    useEffect(() => {
        fetchAllRubriques()
        fetchAllAuteurs()
    }, [])

    const handleSubmit = async (e) => {
        e.preventDefault();
        await API.addArticle(titre, numAuteur, contenu, numRubrique);
    }


    return(
        <div className="container">
            <form onSubmit={handleSubmit}>


                <div className="mb-3">
                    <label htmlFor="titre" className="form-label">Titre de l'article</label>
                    <input type="text" className="form-control" id="titre" onChange={e => setTitre(e.target.value)}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="numeroauteur" className="form-label">Selectioner l'auteur</label>
                    <select className="form-select" id="numeroauteur" onChange={e => fetchAuteurById(e.target.value)}>
                        {auteurs.map((a) => {
                            return <option value={a.idEmploye}>{a.prenom} {a.nom} </option>
                        })}
                    </select>
                </div>
                <div className="mb-3">
                    <label htmlFor="contenu" className="form-label">Contenu</label>
                    <input type="text" className="form-control" id="contenu" onChange={e => setContenu(e.target.value)}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="numeroRubrique" className="form-label">Selectioner la rubrique</label>
                    <select className="form-select" id="numeroRubrique" onChange={e => fetchRubriqueById(e.target.value)}>
                        {rubriques.map((r) => {
                            return <option value={r.idRubrique}>{r.titre} </option>
                        })}
                    </select>
                </div>

                <button type="submit" className="btn btn-primary">Valider</button>
            </form>
        </div>
    )
}

export default AddArticle;