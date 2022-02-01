import React from "react";
import { Route, Redirect } from "react-router-dom";

const AuthRoute = (props) => {
    const { isAuthenticated = false, Component , ...rest}  = props;
    if(isAuthenticated) {
        return <Redirect to='/dashboard' />
    } else {
        return <Route {...rest} component={Component} />
    }
}

export default AuthRoute;