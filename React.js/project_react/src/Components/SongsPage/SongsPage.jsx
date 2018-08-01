import React from 'react';
import Song from '../Song/Song';
import './SongsPage.css'

const SongsPage =({songsData})=> {
    return (
        <div className='content'>
            {songsData.map(el=><Song url={el.image[1]['#text']} artist={el.artist.name} name={el.name}  key={el.url}/>)}
        </div>
    )
};

export default SongsPage;