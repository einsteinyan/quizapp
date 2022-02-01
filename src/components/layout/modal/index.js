import React from 'react';
import './style.css';
import InlineButton from 'components/common/inlineButton';

const Modal = (props) => {
    const { setIsOpen } = props;

    return(
        <React.Fragment>
            <div className='modal-container'>
                <InlineButton onClick={() => setIsOpen(false)}>CLOSE</InlineButton>
                <div className='modal-content'>
                    {props.children}
                </div>
            </div>
        </React.Fragment>
    );
}

export default Modal;