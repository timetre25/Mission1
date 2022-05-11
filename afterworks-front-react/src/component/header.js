import {Link} from "react-router-dom";
import {useContext} from "react";
import AuthenticatedContext from "./authenticatedContext";
import API from "../services/API";


const Header = ({history})=> {
    const auth = useContext(AuthenticatedContext)
    const handleDeconnexion = () => {
        API.logout()
        auth.setIsAuthenticated(false)
        history.push("/login")
    }
return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary" >

        <div className="container-fluid">
            <Link className="navbar-brand" to="">Afterworks</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link className="nav-link active" aria-current="page" to="/">Accueil</Link>
                    </li>

                    <li className="nav-item">
                        <Link className="nav-link active" aria-current="page" to="/produits">Catégories</Link>
                    </li>

                    <li className="nav-item">
                        <Link className="nav-link active" aria-current="page" to="/rubriques">Rubriques</Link>
                    </li>


                    <li className="nav-item">
                        <Link className="nav-link active" aria-current="page" to="/admin">Administrer</Link>
                    </li>




                </ul>

            </div>

            <div>
                <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <Link className="nav-link btn text-success" to="/newsletter">NewsLetter</Link>
                            </li>
                    {
                        // eslint-disable-next-line no-mixed-operators
                        auth.isAuthenticated && (
                            <li className="nav-item">
                                <button onClick={handleDeconnexion} className="nav-link btn text-danger">Déconnexion
                                    <span className="visually-hidden">(current)</span>
                                </button>
                            </li>
                            // eslint-disable-next-line no-mixed-operators
                        ) || (
                        <li className="nav-item">
                            <Link to="/login" className="nav-link text-info">Connexion
                                <span className="visually-hidden">(current)</span>
                            </Link>
                        </li>

                        )
                    }


                </ul>
            </div>
        </div>
    </nav>
)
}
export default Header;
