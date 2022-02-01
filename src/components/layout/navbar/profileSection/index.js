import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './style.css';
// import { Route } from 'react-router-dom';
import { eraseCookie } from 'shared/utils';

const ProfileSection = (props) => {
    const [isDropdown, setIsDropdown] = useState(false);

    const handleProfileClick = () => {
        setIsDropdown((isDropdown) => !isDropdown);
    }

    const logout = () => {
        eraseCookie('access_token');
        props.history.push('/login');
    }

    return(
        <div className='profile-section'>
            <div className='profile-icon' onClick={handleProfileClick}>
                <span>PS</span>
                <ul className={`profile-dropdown ${isDropdown ? 'show' : 'hide'}`}>
                    <li><Link to='/account/settings'>Account Settings</Link></li>
                    <li onClick={logout}>Log Out</li>
                </ul>
            </div>
        </div>
    );
}

export default ProfileSection;