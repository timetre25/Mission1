import React, {useEffect, useState} from "react";
import API from "../services/API";

const Newsletter = () => {

    const [email, setEmail] = useState("");



    const handleSubmit = async (e) => {
        e.preventDefault();
        await API.addNewsletter(email);
    }


    return(
        <div className="container">
            <form onSubmit={handleSubmit}>

<h1 className="text-center m-5">S'inscrire à la Newsletter</h1>
                <div className="mb-3 mx-auto"  style={{width: 40 + '%'}}>
                    <label htmlFor="titre" className="form-label">Email</label>
                    <input type="email" className="form-control" id="titre" onChange={e => setEmail(e.target.value)}/>
                    <button type="submit" className="btn btn-primary mt-5">Valider</button>

                </div>


            </form>
        </div>
    )
}

export default Newsletter;