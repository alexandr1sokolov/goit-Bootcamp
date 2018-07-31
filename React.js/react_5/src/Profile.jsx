import React from 'react';
import Modal from './Modal';
// import PropTypes from 'prop-types';

const Profile = ({id,close}) => {
    return (
        <div>
            <Modal close={close} id={id}>
                <h2>Profile</h2>
                <input type="text" placeholder='Name'/>
                <input type="text" placeholder='Age'/>
                <input type="text" placeholder='Last Name'/>
                <input type="text" placeholder='Country'/>
                <input type="text" placeholder='City'/>
                <input type="email" placeholder='Mail'/>
                <button>Save</button>
            </Modal>
        </div>
    );
};

Profile.propTypes = {};
Profile.defaultProps = {};

export default Profile;
