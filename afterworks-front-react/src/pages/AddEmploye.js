import React, {useState, useEffect} from "react";
import API from "../services/API";

const AddEmploye = () => {

    const [role, setRole] = useState("");
    const [roles, setRoles] = useState([]);
    const [numRole, setNumRole] = useState("");
    const [nom, setNom] = useState("");
    const [prenom, setPrenom] = useState("");
    const [mdp, setMdp] = useState("");
    const [mail, setMail] = useState("");
    const [lib, setLib] = useState("");
    const [cp, setCp] = useState("");
    const [ville, setVille] = useState("");
    const [tel, setTel] = useState("");
    const [embauche, setEmbauche] = useState("");

    const fetchAllRoles= async () => {
        try {
            const data = await API.getAllRole();
            setRoles(data);
        } catch (e) {
            console.log(e);
        }
    }
    const fetchRoleById = async (id) => {
        try {
            setNumRole(id)
            const data = await API.getRoleById(id);
            setRole(data);
        } catch (e) {
            console.log(e);
        }
    }

    useEffect(() => {
        fetchAllRoles();
    }, []);



    const handleSubmit = async (e) => {
        e.preventDefault();
        await API.addEmploye(numRole, nom, prenom, mdp, mail, lib, cp, ville, tel, embauche);
    }



    return(
        <div className="container">
            <form onSubmit={handleSubmit}>



                <div className="mb-3">
                    <label htmlFor="numeroRole" className="form-label">Selectioner le role</label>
                    <select className="form-select" id="numeroRole" onChange={e => fetchRoleById(e.target.value)}>
                        {roles.map((r) => {
                            return <option value={r.idRole}>{r.libelleRole} </option>
                        })}
                    </select>
                </div>
                <div className="mb-3">
                    <label htmlFor="nom" className="form-label">Nom</label>
                    <input type="text" className="form-control" id="nom" onChange={e => setNom(e.target.value)}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="prenom" className="form-label">Prénom</label>
                    <input type="text" className="form-control" id="prenom" onChange={e => setPrenom(e.target.value)}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="mdp" className="form-label">Mot de passe</label>
                    <input type="password" className="form-control" id="mdp" onChange={e => setMdp(e.target.value)}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="mail" className="form-label">Mail</label>
                    <input type="mail" className="form-control" id="mail" onChange={e => setMail(e.target.value)}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="lib" className="form-label">Libelle rue</label>
                    <input type="text" className="form-control" id="lib" onChange={e => setLib(e.target.value)}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="cp" className="form-label">CP</label>
                    <input type="text" className="form-control" id="cp" onChange={e => setCp(e.target.value)}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="ville" className="form-label">Ville</label>
                    <input type="text" className="form-control" id="ville" onChange={e => setVille(e.target.value)}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="tel" className="form-label">Telephone</label>
                    <input type="phone" className="form-control" id="tel" onChange={e => setTel(e.target.value)}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="embauche" className="form-label">Date Embauche</label>
                    <input type="date" className="form-control" id="embauche" onChange={e => setEmbauche(e.target.value)}/>
                </div>

                <button type="submit" className="btn btn-primary">Valider</button>
            </form>
        </div>
    )
}

export default AddEmploye;