import React from 'react';
import cardImg from './card.png';
import add from './add.svg';
import fav from './fav.svg';
import play from './play.svg';
import './Card.css'
// import PropTypes from 'prop-types';

const Card = ({url, name, info, addFavourite, index, type, checkArr, interesting, handlerYouTube}) => {

    return (
        <div className="artist-card">
            <figure>
                <div className="figure__box">
                    <div className="img-container">
                        <img src={url !== '' ? url : cardImg} alt="artist" className="artist-card__img"/>
                        <div className="card__overlay">
                            <div className="svg-container">
                                <img src={play}
                                     alt="youtube"
                                     className='card__svg'
                                     onClick={handlerYouTube}
                                     data-query={`${typeof info === 'object'? info.name : info.includes('Listeners')?'':info} ${name}`}
                                />
                                <img src={fav}
                                     onClick={addFavourite}
                                     data-index={index}
                                     data-arr-for-add={type}
                                     data-check={checkArr}
                                     alt="favorite"
                                     className='card__svg'/>
                                <img src={add}
                                     alt="add"
                                     className='card__svg'
                                     onClick={addFavourite}
                                     data-index={index}
                                     data-arr-for-add={interesting}
                                     data-check={checkArr}
                                />
                            </div>
                        </div>
                    </div>
                    <figcaption className='figcaption'>
                        <p className="artist-card__name">{name}</p>
                        <p className="artist-card__number-albums">{typeof info === 'object'? info.name : info}</p>
                    </figcaption>
                </div>
            </figure>
        </div>
    );
};

// Card.propTypes = {};
// Card.defaultProps = {};

export default Card;
