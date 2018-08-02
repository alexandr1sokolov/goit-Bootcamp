import React from 'react';
import './Song.css'
import cardImg from './react.png';
// import PropTypes from 'prop-types';

function Song({url, artist, name}) {
    return (
        <div className="songs-item">
            <figure className="songs-item__figure">
                <img className="songs-item__img" src={url!==''? url : cardImg} alt="song-logo"/>
                    <figcaption className="songs-item__discription">
                        <p className="songs-item__music-name">{name}</p>
                        <p className="songs-item__singer">{typeof artist === 'object'? artist.name : artist}</p>
                    </figcaption>
            </figure>
        </div>
);
}

// Song.propTypes = {};
// Song.defaultProps = {};

export default Song;
