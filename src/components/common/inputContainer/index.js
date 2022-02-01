import React from 'react';
import './style.css';

const InputContainer = (props) => {
    const { name = '', type = '', value = '', containerClass = '', className = '', label = '', errorTxt = '', onChange = () => {}, onBlur = () => {} } = props;

    return(
        <div className={`input-container ${containerClass}`}>
            <input 
                type={type}
                id={name}
                className={`${className} ${value ? 'completed' : ''} ${errorTxt ? 'error' : ''}`}
                value={value}
                onChange={onChange}
                onBlur={onBlur}
            />
            <label htmlFor={name} className={errorTxt ? 'error' : ''}>
                {errorTxt ? errorTxt : label}
            </label>
        </div>
    );
}
export default InputContainer;