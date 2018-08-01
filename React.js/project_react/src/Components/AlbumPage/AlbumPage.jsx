import React from 'react';
import Card from '../Card/Card';
import './AlbumPage.css'
// import PropTypes from 'prop-types';

const AlbumPage=({albumsData})=> {
        return (
            <div className='content'>
                {albumsData.map(el=><Card url={el.image[2]['#text']} name={el.name} info={el.artist.name} key={el.url+el.name}/>)}
            </div>
        );
};

export default AlbumPage;
