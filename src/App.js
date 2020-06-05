import React from 'react';
import {
  Switch,
  Route,
  BrowserRouter as Router
} from "react-router-dom";
import { connect } from "react-redux";

import ProtectedRoute from "./components/ProtectedRoute";
import { Dashboard, Login, Home, Logout, Signup } from './pages';
import { Header } from './components';

function App(props) {
  const { isAuthenticated, isVerifying } = props;
  return (
    <div className="App h-screen w-full bg-base-dark">
      <Router>
        <Header />
        <div className="h-screen w-full pt-16">
          <Switch>
            <ProtectedRoute
              exact
              path="/dashboard"
              component={Dashboard}
              isAuthenticated={isAuthenticated}
              isVerifying={isVerifying}
            />
            <Route exact path="/" component={Home} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/logout" component={Logout} />
            <Route exact path="/signup" component={Signup} />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    isAuthenticated: state.auth.isAuthenticated,
    isVerifying: state.auth.isVerifying
  };
}

export default connect(mapStateToProps)(App);
