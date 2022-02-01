import React, { useEffect, useState } from 'react';
import { Route, Switch, Redirect, BrowserRouter as Router } from 'react-router-dom';
import Login from 'pages/login';
import Dashboard from 'pages/dashboard';
import ProtectedRoute from 'components/auth/protectedRoute';
import { readCookie } from 'shared/utils';

const Routes = () => {

    const isAuthenticated = () => {
        return !!readCookie('access_token');
    }

    const AuthRoute = ({ component: Component, ...rest }) => {
        if(isAuthenticated()) {
          return <Redirect to='/dashboard' />
        } else {
          return <Route {...rest} component={Component} />
        }
    };

    return(
        <React.Fragment>
            <Router>
                <Switch>
                    <AuthRoute exact path="/login" component={Login}/>
                    <ProtectedRoute exact path="/dashboard" component={Dashboard} isAuthenticated={isAuthenticated}/>
                </Switch>
            </Router>
        </React.Fragment>
    );
}

export default Routes;