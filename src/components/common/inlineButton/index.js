import React from 'react';
import './style.css';

const InlineButton = (props) => {
    const { link = '', onClick = () => {}} = props;

    // const handleClick = () => {
    //     link && props.history.push(link);
    //     !link && customOnClick();
    // }

    return(
        <p className='inline-wrapper'>
            <span 
                onClick={onClick}
            >
                {props.children}
            </span>
        </p>
    );
}

export default InlineButton;