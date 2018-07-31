import React from 'react';
import './Modal.css';

const Modal =({children, close, id})=>{
    return(
        <div className='overlay' onClick={close} id={id}>
            <div className='modal'>
                <p className='close' onClick={close} id={id}>&#120;</p>
                {children}
            </div>
        </div>
    )
};

export default Modal;