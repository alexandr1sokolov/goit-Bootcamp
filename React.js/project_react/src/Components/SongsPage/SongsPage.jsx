import React from 'react';
// import FlipMove from "react-flip-move";
import Song from '../Song/Song';
import './SongsPage.css'


const SongsPage =({songsData, addFavourite, handlerYouTube})=> {
    return (
        <div className='content'>
            {songsData.map((el,index)=><Song
                url={el.image[1]['#text']}
                artist={el.artist}
                name={el.name}
                key={el.url}
                type='favouriteSongs'
                index={index}
                checkArr='songsData'
                addFavourite={addFavourite}
                interesting = 'interestingSongs'
                handlerYouTube={handlerYouTube}
            />)}
        </div>
    )
};

export default SongsPage;