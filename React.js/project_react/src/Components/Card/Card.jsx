import React from 'react';
import cardImg from './card.png';
import './Card.css'
// import PropTypes from 'prop-types';

const Card = ({url, name, info}) => {
    return (
        <div className="artist-card">
            <figure className='figure'>
                <img src={url!==''? url : cardImg} alt="artist" className="artist-card__img"/>
                    <figcaption className='figcaption'>
                        <p className="artist-card__name">{name}</p>
                        <p className="artist-card__number-albums">{typeof info === 'object'? info.name : info}</p>
                    </figcaption>
            </figure>
        </div>
    );
};

// Card.propTypes = {};
// Card.defaultProps = {};

export default Card;
