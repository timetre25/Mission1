import "../App.css";
import AuthenticatedContext from "../component/authenticatedContext"
import {useContext, useState} from "react";
import API from "../services/API";
const LoginPage = ({history}) => {

    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");


    const auth = useContext(AuthenticatedContext)

    const handleSubmit = async e => {
        e.preventDefault();
        const token = await API.login(email,password);
        localStorage.setItem("token",token);
        auth.setIsAuthenticated(true)
        history.replace('/')
        console.log(token)

    }

    return(
        <div className="container">
            <h1 className="text-center m-5">Connexion</h1>
            <form onSubmit={handleSubmit}>
                <div className="mx-auto" style={{width: 40 + '%'}}>
                    <div ><label htmlFor="exampleInputEmail1" className="form-label"
                                                        placeholder="Entrer votre email">Email</label></div>
                    <input type="email" className="form-control" placeholder={"Entrer votre email"}
                           id="email" value={email} onChange={e => setEmail(e.target.value)}/>
                </div>
                <div className="mx-auto mt-4 " style={{width: 40 + '%'}}>
                    <label htmlFor="inputPassword" className="form-label">Mot de passe</label>
                    <input type="password" className="form-control" id="password" value={password}
                           onChange={e => setPassword(e.target.value)} placeholder={"Entrer votre mot de passe"}/>
                    <button type="submit" className="btn btn-primary mt-5 ">Connexion</button>
                </div>
            </form>
        </div>
    )
}

export default LoginPage;