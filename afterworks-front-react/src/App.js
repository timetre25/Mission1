import './App.css';
import Header from "./component/header";
import {BrowserRouter, Switch, Route, withRouter} from "react-router-dom";
import React, { useEffect, useState } from "react";
import ProductPage from "./pages/ProductPage"
import DetailsProduitPage from "./pages/DetailsProduitPage";
import RubriquePage from "./pages/RubriquePage";
import ArticlePage from "./pages/ArticlePage";
import AddArticle from "./pages/AddArticle";
import AdminPage from "./pages/AdminPage";
import ProductPageByCate from "./pages/ProductByCategPage";
import ArticleByRubrique from "./pages/ArticleByRubriquePage";
import LoginPage from "./pages/LoginPage";
import UpdateEmploye from "./pages/UpdateEmployePage";
import DeleteEmploye from "./pages/DeleteEmploye";
import AccueilPage from "./pages/Accueil Page";
import Newsletter from "./pages/NewsLetterPage";
import API from "./services/API";
import AuthenticatedContext from "./component/authenticatedContext";
import {PrivateRouteToLevelPower} from "./component/PrivateRoute";



function App() {

    const [isAuthenticated, setIsAuthenticated] = useState(API.isAuthenticated)
    const [pRole, setPRole] = useState();

    useEffect(() => {
        if (isAuthenticated) {
            const content = API.getPayLoad();
            setPRole(content["role"])
        } else {
            setPRole(0);
        }
    }, [isAuthenticated])

    const AuthenticatedContextValue = {
        isAuthenticated : isAuthenticated,
        setIsAuthenticated : setIsAuthenticated,
        role:pRole,
        setRole:setPRole
    }

    const HeaderWithRouter = withRouter(Header)
  return (
<AuthenticatedContext.Provider value={AuthenticatedContextValue}>
          <BrowserRouter>
              <HeaderWithRouter/>
              <Switch>
                  <Route path="/newsletter" component={Newsletter}/>
                  <Route  path="/produits" component={ProductPage}/>
                  <Route  path="/produit/details/:idProduit" component={DetailsProduitPage}/>
                  <Route  path="/rubriques" component={RubriquePage}/>
                  <PrivateRouteToLevelPower  path="/admin" component={AdminPage} roleNeed={1} />
                  <Route  path="/:idCategorie/produits" component={ProductPageByCate}/>
                  <Route  path="/:idRubrique/articles" component={ArticleByRubrique}/>
                  <Route  path="/login" component={LoginPage}/>
                  <Route  path="/updateEmploye" component={UpdateEmploye}/>
                  <Route  path="/deleteEmploye" component={DeleteEmploye}/>
                  <Route  path="/" exact component={AccueilPage}/>


              </Switch>
          </BrowserRouter>
</AuthenticatedContext.Provider>
  );

}
export default App;

