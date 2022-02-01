import React, { useEffect, useState } from 'react';
import './style.css'

const ViewWrapper = (props) => {
    const { isAuthScreen = false } = props;

    return(
        <div className={`view-wrapper ${isAuthScreen ? 'auth' : 'default'}`}>
            {props.children}
        </div>
    );
}

export default ViewWrapper;