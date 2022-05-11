import {Redirect, Route} from "react-router-dom";
import API from "../services/API";
export const PrivateRouteToLevelPower = ({path, component, roleNeed}) => {
    const actualPower = (API.isAuthenticated() ? API.getPayLoad()["role"] : 0);

    return actualPower >= roleNeed
        ? <Route path={path} component={component}/>
        : <Redirect to={"/login"}/>
}