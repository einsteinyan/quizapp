import React from 'react';
import './style.css';

const CheckboxContainer = (props) => {
    const { name = '', label = ''} = props;
    return(
        <div className='checkbox-container'>
            <input 
                type='checkbox'
                id={name}
            />
            <label htmlFor={name}>{label}</label>
        </div>
    );
}

export default CheckboxContainer;