import axios from "../config/axios";
import jwtDecode from "jwt-decode";

const getProduits = () => {
    return axios.get("/getProduits")
        .then(response => response.data);
}
const getDetailsProduitById = (id) => {
    return axios.get("/getProduit/"+id)
        .then(response => response.data);
}
const getEmployeById = (id) => {
    return axios.get("/getEmploye/"+id)
        .then(response => response.data);
}
const getRoleById = (id) => {
    return axios.get("/getRole/"+id)
        .then(response => response.data);
}
const getRubriqueById = (id) => {
    return axios.get("/getRubrique/"+id)
        .then(response => response.data);
}
const getProductByCategory = (idCategorie) => {
    return axios.get("/produits/categorie/"+idCategorie)
        .then(response => response.data);
}
const getCommentaireByProduct = (idProduit) => {
    return axios.get("/commentaires/"+idProduit)
        .then(response => response.data);
}

const getArticleByRubrique = (idRubrique) => {
    return axios.get("/articles/rubrique/"+idRubrique)
        .then(response => response.data);

}

const getRubriques = () => {
    return axios.get("/getRubriques")
        .then(response => response.data);
}
const getArticles = () => {
    return axios.get("/getArticles")
        .then(response => response.data);
}
const getEmployes = () => {
    return axios.get("/getEmployes")
        .then(response => response.data);
}
const getCategories = () => {
    return axios.get("/getCategories")
        .then(response => response.data);
}
const getAllRole = () => {
    return axios.get("/getRoles")
        .then(response => response.data);
}
const getCategoriesWithProduct = () => {
    return axios.get("/getCategories")
        .then(response => response.data);
}

const upadateEmploye = (id, mdp) => {
    return axios.patch("/employe/"+id , {
        "mot_de_passe":mdp === undefined ? null :mdp,
    })
        .then(response => response.data)
}
const deleteEmploye = (id) => {
    return axios.delete("/employe/"+id , {
    })
        .then(response => response.data)
}
const deleteRubrique = (id) => {
    return axios.delete("/rubrique/"+id , {
    })
        .then(response => response.data)
}

const addArticle = (titre, auteur, contenu, rubrique) => {
    return axios.post("/articlev2", {
        "titre": titre === undefined ? null :titre,
        "id_employe": auteur === undefined ? null :auteur,
        "contenu": contenu === undefined ? null :contenu,
        "id_rubrique":rubrique === undefined ? null :rubrique
    })
        .then(response => response.data);
}
const addRubrique = (titre, descrption) => {
    return axios.post("/rubrique", {
        "titre": titre === undefined ? null :titre,
        "description": descrption === undefined ? null :descrption,
    })
        .then(response => response.data);
}
const addNewsletter = (email) => {
    return axios.post("/newsletter", {
        "email": email === undefined ? null :email,
    })
        .then(response => response.data);
}
const addEmploye = (role, nom, prenom, mdp, mail, lib, cp, ville, tel, embauche) => {
    return axios.post("/employe", {
        "id_role": role === undefined ? null :role,
        "nom": nom === undefined ? null :nom,
        "prenom": prenom === undefined ? null :prenom,
        "mot_de_passe":mdp === undefined ? null :mdp,
        "mail":mail === undefined ? null :mail,
        "lib_rue":lib === undefined ? null :lib,
        "CP_ville":cp === undefined ? null :cp,
        "ville":ville === undefined ? null :ville,
        "tel":tel  === undefined ? null :tel,
        "date_embauche":embauche  === undefined ? null :embauche
    })
        .then(response => response.data);
}

const login = (email, password) => {
    return axios.post("/connexion", {"email": email, "password": password})
        .then(response => response.data.token);
}
const logout = (email, password) => {
    localStorage.removeItem("token")
}
const getPayLoad = () => {
    return jwtDecode(localStorage.getItem("token"))
}

const isAuthenticated = () => {
    const token = localStorage.getItem("token");
    if (token) {
        const payload = jwtDecode(token);
        console.log(payload)
        return payload.exp * 1000 > new Date().getTime()
    }
    return false
}

export default {getProduits,getCommentaireByProduct,deleteRubrique,getPayLoad, logout,isAuthenticated,addNewsletter,deleteEmploye,getRoleById,getRubriqueById,getEmployeById,login,addRubrique,getArticleByRubrique,getAllRole,getDetailsProduitById,getProductByCategory, getRubriques, upadateEmploye,getArticles, addArticle, getEmployes, getCategories, addEmploye}
