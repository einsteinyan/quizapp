import React from 'react';
import ImageContainer from 'components/common/imgContainer';
import LogoLight from 'assets/original/logo-light.svg';
import Navlinks from 'components/layout/navbar/navlinks';
import './style.css';
import ProfileSection from './profileSection';

const Navbar = () => {
    return(
        <div className='navbar'>
            <ImageContainer src={LogoLight} className='w-32 h-8 m-2'/>
            <Navlinks/>
            <ProfileSection/>
        </div>
    );
}

export default Navbar;