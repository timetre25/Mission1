import React, {useEffect, useState} from "react";
import API from "../services/API";

const UpdateEmploye = () => {

    const [employe, setEmploye] = useState();
    const [employes, setEmployes] = useState([]);
    const [numEmploye, setNumEmploye] = useState();
    const [mdp, setMdp] = useState();



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
        await API.upadateEmploye(numEmploye, mdp);
    }


    return(
        <div className="container">
            <div className="mb-3">
                <label htmlFor="numeroEmploye" className="form-label">Selectioner l'employé à modifier :</label>
                <select className="form-select" id="numeroEmploye" onChange={e => fetchEmployeById(e.target.value)}>
                    {employes.map((e) => {
                        return <option value={e.idEmploye}>{e.nom} {e.prenom}</option>
                    })}
                </select>
            </div>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="motdepasse" className="form-label">Mot de passe :</label>
                    <input type="text"   placeholder={employe?.motDePasse} className="form-control" id="motdepasse" onChange={e => setMdp(e.target.value)}/>
                </div>
                <button type="submit" className="btn btn-primary">Valider</button>
            </form>
        </div>
    )
}

export default UpdateEmploye;