import React, {useEffect, useState} from "react";
import API from "../services/API";

const DeleteEmploye = () => {

    const [employe, setEmploye] = useState();
    const [employes, setEmployes] = useState([]);
    const [numEmploye, setNumEmploye] = useState();



    const fetchAllEmployes = async () => {
        try {
            const data = await API.getEmployes();
            setEmployes(data);
        } catch (e) {
            console.log(e);
        }
    }

    const fetchEmployeById = async (id) => {
        try {
            setNumEmploye(id)
            const data = await API.getEmployeById(id);
            setEmploye(data);
        } catch (e) {
            console.log(e);
        }
    }

    useEffect(() => {
        fetchAllEmployes()
    }, [])

    const handleSubmit = async (e) => {
        e.preventDefault();
        await API.deleteEmploye(numEmploye);
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