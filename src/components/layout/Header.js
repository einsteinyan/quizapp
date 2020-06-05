import React, { Component } from 'react';
import { NavLink } from "react-router-dom";
import HamburgerMenu from 'react-hamburger-menu';
import { connect } from "react-redux";
import ProtectedNavlink from "../ProtectedNavlink";
import NavLogo from '../../assets/img/nav-logo.png'; 


class Header extends Component {
    constructor() {
		super();
		this.state = {
			open: [true]
		};
    }
	handleClick() {
        this.setState({
            open: !this.state.open
        });
    }
    render() {
        const { isAuthenticated } = this.props;
        const disableOnAuth = !isAuthenticated;
        return (
            <header className="fixed w-full md:flex items-center justify-between bg-nav-dark h-16 shadow-lg">
                <div className="flex items-center justify-between px-4 py-3">
                    <div className="h-8">
                        <NavLink to="/">
                            <img className="h-8" src={NavLogo} alt="Logo" />
                        </NavLink>
                    </div>
                    <HamburgerMenu
                        isOpen={!this.state.open}
                        menuClicked={this.handleClick.bind(this)}
                        width={16}
                        height={10}
                        strokeWidth={2}
                        rotate={0}
                        color='#eee'
                        borderRadius={0}
                        animationDuration={0.3}
                        className="w-6 h-6 focus:outline-none block md:hidden"
                    />
                </div>
                <div className={`${this.state.open ? 'hidden' : 'block'} md:flex`}>
                    <ProtectedNavlink 
                        isAuthenticated={isAuthenticated}  
                        className="nav-link" 
                        activeClassName="active-link" 
                        to="/dashboard">
                            Dashboard
                    </ProtectedNavlink>
                    <ProtectedNavlink 
                        isAuthenticated={disableOnAuth}  
                        className="nav-link" 
                        activeClassName="active-link" 
                        to="/login">
                            Log In
                    </ProtectedNavlink> 
                    <ProtectedNavlink 
                        isAuthenticated={isAuthenticated}  
                        className="nav-link" 
                        activeClassName="active-link" 
                        to="/logout">
                            Log Out
                    </ProtectedNavlink> 
                </div>
            </header>
        );
    }
}

function mapStateToProps(state) {
    return {
      isAuthenticated: state.auth.isAuthenticated,
      isVerifying: state.auth.isVerifying
    };
  }

export default connect(mapStateToProps)(Header);
      