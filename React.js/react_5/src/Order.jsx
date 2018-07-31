import React from 'react';
import Modal from './Modal';
// import PropTypes from 'prop-types';

const Order = ({id, close}) => {
    return (
        <div>
            <Modal close={close} id={id}>
                <h2>Order</h2>
                <input type="text" placeholder='Amount'/>
                <input type="text" placeholder='Color'/>
                <input type="text" placeholder='City'/>
                <input type="text" placeholder='Phone'/>
                <input type="email" placeholder='Mail'/>
                <button>Save</button>
            </Modal>
        </div>
    );
};

Order.propTypes = {};
Order.defaultProps = {};

export default Order;
