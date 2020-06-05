import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { loginUser, signupUser } from "../actions";
 
class Login extends Component {
  state = { email: "", password: "" };

  handleEmailChange = ({ target }) => {
    this.setState({ email: target.value });
  };

  handlePasswordChange = ({ target }) => {
    this.setState({ password: target.value });
  };

  handleLogin = () => {
    const { dispatch } = this.props;
    const { email, password } = this.state;

    dispatch(loginUser(email, password));
  };

  handleSignup = () => {
    const { dispatch } = this.props;
    const { email, password } = this.state;

    dispatch(signupUser(email, password));
  };
  
  render() {
    const { loginError, isAuthenticated, signupError } = this.props;
    if (isAuthenticated) {
      return <Redirect to="/dashboard" />;
    }
    else {
      return (
        <div className="flex justify-center items-center h-full">
          <div className="w-1/4 transform -translate-y-20">
            <h1 className="text-center mb-20">Join the <span className="highlight">club.</span></h1>
            <form className="bg-base rounded px-8 pt-6 pb-8 mb-4 mx-auto max-w-xs">
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                  Email
                </label>
                <input onChange={this.handleEmailChange} className="bg-nav-dark appearance-none rounded w-full py-2 px-3 text-gray-400 leading-tight focus:outline-none focus:shadow-outline" id="email" type="text" placeholder="email" />
              </div>
              <div className="mb-6">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                  Password
                </label>
                <input onChange={this.handlePasswordChange} className="bg-nav-dark appearance-none rounded w-full py-2 px-3 text-gray-400 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************" />
              </div>
              <div className="flex-row items-center justify-between">
                <button onClick={this.handleLogin} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 w-full rounded focus:outline-none focus:shadow-outline" type="button">
                  Log In
                </button>
                <p className="w-full text-center my-2">or</p>
                <button onClick={this.handleSignup} className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 w-full rounded focus:outline-none focus:shadow-outline" type="button">
                  Sign Up
                </button>
                {loginError && (
                  <p className="mt-4 flex items-center justify-between text-primary">Incorrect email or password.</p>
                )}
                {signupError && (
                  <p className="mt-4 flex items-center justify-between text-primary">Couldn't create an account.</p>
                )}
              </div>
            </form>
            <p className="text-center text-gray-500 text-xs">
              &copy; 2020 Pradhan.
            </p>
          </div>
        </div>
      );
    }
  }
}
 
function mapStateToProps(state) {
  return {
    isSigningUp: state.auth.isSigningUp,
    signupError: state.auth.signupError,
    isLoggingIn: state.auth.isLoggingIn,
    loginError: state.auth.loginError,
    isAuthenticated: state.auth.isAuthenticated
  };
}

export default connect(mapStateToProps)(Login);