import React, {useEffect, useState} from "react";
import API from "../services/API";

const DeleteRubrique = () => {

    const [rubrique, setrubrique] = useState();
    const [rubriques, setrubriques] = useState([]);
    const [numrubrique, setNumrubrique] = useState();



    const fetchAllrubrique = async () => {
        try {
            const data = await API.getRubriques();
            setrubriques(data);
        } catch (e) {
            console.log(e);
        }
    }

    const fetchrubriqueById = async (id) => {
        try {
            setNumrubrique(id)
            const data = await API.getRubriqueById(id);
            setrubrique(data);
        } catch (e) {
            console.log(e);
        }
    }

    useEffect(() => {
        fetchAllrubrique()
    }, [])

    const handleSubmit = async (e) => {
        e.preventDefault();
        await API.deleteRubrique(numrubrique);
    }


    return(
        <div className="container">
            <div className="mb-3">
                <label htmlFor="numeroRub" className="form-label">Selectioner la rubrique à supprmier</label>
                <select className="form-select" id="numeroRub" onChange={e => fetchrubriqueById(e.target.value)}>
                    {rubriques.map((r) => {
                        return <option value={r.idRubrique}>{r.titre} </option>
                    })}
                </select>
            </div>
            <form onSubmit={handleSubmit}>
                <button type="submit" className="btn btn-primary">Valider</button>
            </form>
        </div>
    )
}

export default DeleteRubrique;