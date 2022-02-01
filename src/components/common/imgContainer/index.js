import React from 'react';

const ImageContainer = (props) => {
    const { src = '', name = '', className = '', onClick = () => {}} = props;
    return(
        <div className={'img-container ' + className} onClick={onClick}>
            <img src={src} alt={name}></img>
        </div>
    );
}

export default ImageContainer;