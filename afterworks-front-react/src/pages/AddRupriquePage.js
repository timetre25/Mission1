import React, {useState} from "react";
import API from "../services/API";

const AddRubrique = () => {

    const [titre, setTitre] = useState("");
    const [description, setDescription] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        await API.addRubrique(titre, description);
    }


    return(
        <div className="container">
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="titre" className="form-label">Titre de la rubrique</label>
                    <input type="text" className="form-control" id="titre" onChange={e => setTitre(e.target.value)}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="description" className="form-label">Description</label>
                    <input type="text" className="form-control" id="description" onChange={e => setDescription(e.target.value)}/>
                </div>


                <button type="submit" className="btn btn-primary">Valider</button>
            </form>
        </div>
    )
}

export default AddRubrique;