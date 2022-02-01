import React from "react";
import { Route, Redirect } from "react-router-dom";

const ProtectedRoute = (props) => {
    const { isAuthenticated = () => {}, component: Component , ...rest}  = props;
    if(isAuthenticated()) {
        return <Route {...rest} component={Component} />
    } else {
        return <Redirect to='/login' />
    }
}

export default ProtectedRoute;