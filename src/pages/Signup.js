import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { signupUser } from "../actions";
 
class Signup extends Component {
  state = {email: "", password: "" };

  handleNameChange = ({ target }) => {
    this.setState({ name: target.value });
  };

  handleEmailChange = ({ target }) => {
    this.setState({ email: target.value });
  };

  handlePasswordChange = ({ target }) => {
    this.setState({ password: target.value });
  };

  handleSubmit = () => {
    const { dispatch } = this.props;
    const { email, password } = this.state;
    
    dispatch(signupUser(email, password));
  };

  
  render() {
    const { signupError, isAuthenticated } = this.props;
    if (isAuthenticated) {
      return <Redirect to="/" />;
    }
    else {
      return (
        <div className="flex justify-center items-center h-full">
          <div className="w-full max-w-xs">
            <form className="bg-gray-900 shadow-md rounded px-8 pt-6 pb-8 mb-4">
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                  Email
                </label>
                <input onChange={this.handleEmailChange} className="bg-gray-900 border-gray-800 border appearance-none rounded w-full py-2 px-3 text-gray-400 leading-tight focus:outline-none focus:shadow-outline" id="email" type="text" placeholder="email" />
              </div>
              <div className="mb-6">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                  Password
                </label>
                <input onChange={this.handlePasswordChange} className="bg-gray-900 border-gray-800 appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-400 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************" />
                <p className="text-red-500 text-xs italic">Please choose a password.</p>
              </div>
              <div className="flex items-center justify-between">
                <button onClick={this.handleSubmit} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                  Sign Up
                </button>
                {signupError && (
                  <p className="text-red-500 text-xs italic">Incorrect email or password.</p>
                )}
              </div>
            </form>
            <p className="text-center text-gray-500 text-xs">
              &copy; 2020 Pradarth.
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
    isAuthenticated: state.auth.isAuthenticated
  };
}

export default connect(mapStateToProps)(Signup);