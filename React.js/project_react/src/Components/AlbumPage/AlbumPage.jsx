import React from 'react';
import Card from '../Card/Card';
// import FlipMove from "react-flip-move";
import './AlbumPage.css'
// import PropTypes from 'prop-types';

const AlbumPage=({albumsData, addFavourite, handlerYouTube})=> {
        return (
            <div className='content'>
                {albumsData.map((el,index)=><Card
                    url={el.image[2]['#text']}
                    name={el.name}
                    info={el.artist}
                    key={el.url+el.name}
                    type='favouriteAlbums'
                    index={index}
                    checkArr='albumsData'
                    addFavourite={addFavourite}
                    interesting = 'interestingAlbums'
                    handlerYouTube={handlerYouTube}
                />)}
            </div>
        );
};

export default AlbumPage;
