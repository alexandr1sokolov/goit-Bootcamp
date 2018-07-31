import React from 'react';
import Modal from './Modal';
// import PropTypes from 'prop-types';

const Registration = ({id,close}) => {
    return (
        <div>
            <Modal close={close} id={id}>
            <h2>Registration</h2>
            <input type="text" placeholder='Name'/>
            <input type="email" placeholder='Mail'/>
            <input type="password" placeholder='Password'/>
            <button>Save</button>
        </Modal>
        </div>
    );
};

Registration.propTypes = {};
Registration.defaultProps = {};

export default Registration;
