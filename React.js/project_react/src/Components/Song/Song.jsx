import React from 'react';
import './Song.css'
import cardImg from './react.png';
import play from './play.svg'
import add from './add.svg'
import fav from './fav.svg'
// import PropTypes from 'prop-types';

function Song({url, artist, name, addFavourite, index, type, checkArr}) {
    return (
        <div className="songs-item">
            <figure className="songs-item__figure">
                <img className="songs-item__img" src={url!==''? url : cardImg} alt="song-logo"/>
                <figcaption className="songs-item__discription" >
                    <p className="songs-item__music-name">{name}</p>
                    <p className="songs-item__singer">{typeof artist === 'object' ? artist.name : artist}</p>
                    <div className="svg-song-container">
                        <img src={play} alt="youtube" className='card__svg'/>
                        <img src={fav} alt="favorite" className='card__svg' onClick={addFavourite} data-index={index} data-arr-for-add={type} data-check={checkArr}/>
                        <img src={add} alt="add" className='card__svg'/>
                    </div>
                </figcaption>
            </figure>
        </div>
);
}

// Song.propTypes = {};
// Song.defaultProps = {};

export default Song;
