import React from 'react';
import './Card.css'
// import PropTypes from 'prop-types';

const Card = ({url, name, info}) => {
    return (
        <div className="artist-card">
            <figure className='figure'>
                <img src={url} alt="artist" className="artist-card__img"/>
                    <figcaption className='figcaption'>
                        <p className="artist-card__name">{name}</p>
                        <p className="artist-card__number-albums">{info}</p>
                    </figcaption>
            </figure>
        </div>
    );
};

// Card.propTypes = {};
// Card.defaultProps = {};

export default Card;
