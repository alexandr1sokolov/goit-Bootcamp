import React from 'react';
import './Img.css'
// import PropTypes from 'prop-types';

const Img = ({url}) => {

    return (
        <div className="artist-card">
            <figure>
                <div className="figure__box">
                    <div className="img-container">
                        <img src={url} alt="picture" className="img"/>
                    </div>
                </div>
            </figure>
        </div>
    );
};

// Img.propTypes = {};
// Img.defaultProps = {};

export default Img;
