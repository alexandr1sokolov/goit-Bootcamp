import React from 'react';
// import FlipMove from "react-flip-move";
import './ArtistPage.css';
import Card from '../Card/Card';
// import PropTypes from 'prop-types';

const ArtistPage =({artistsData, addFavourite, handlerYouTube})=> {
        return (
            <div className='content'>
                {artistsData.map((el,index)=><Card
                    addFavourite={addFavourite}
                    url={el.image[2]['#text']}
                    name={el.name}
                    info={`Listeners: ${(+el.listeners).toLocaleString()}`}
                    type='favouriteArtists'
                    interesting = 'interestingArtists'
                    index={index}
                    checkArr='artistsData'
                    key={el.name}
                    handlerYouTube={handlerYouTube}
                />)}
            </div>
        );
};

// ArtistPage.propTypes = {};

export default ArtistPage;