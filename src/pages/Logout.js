import React, { Component } from "react";
import { connect } from "react-redux";
import { logoutUser } from "../actions";

class Logout extends Component {

  homeRedirect = () => {
    window.location = '/';
  }
  dashboardRedirect = () => {
    window.location = '/dashboard';
  }

  handleLogout = () => {
    const { dispatch } = this.props;
    dispatch(logoutUser());
    dispatch(this.homeRedirect);
  };

  render() {
    // const { isAuthenticated } = this.props;
    return (
      <div className="flex justify-center items-center h-full">
        <div className="max-w-xs px-8 pt-6 pb-8 bg-base rounded"> 
          <h5>Are you sure you want to log out?</h5>
          <div className="flex justify-end mt-4">
            <button
              onClick={this.dashboardRedirect}
              className="w-16 hover:bg-nav-dark text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
            >
              No
            </button>
            <button
              onClick={this.handleLogout}
              className="w-16 ml-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
            >
              Yes
            </button>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    isLoggingOut: state.auth.isLoggingOut,
    logoutError: state.auth.logoutError,
  };
}

export default connect(mapStateToProps)(Logout);
