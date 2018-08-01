import React from 'react';
import './ArtistPage.css';
import Card from '../Card/Card';
// import PropTypes from 'prop-types';

const ArtistPage =({artistsData})=> {
        return (
            <div className='content'>
                {artistsData.map(el=><Card url={el.image[2]['#text']} name={el.name} info={`Listeners: ${el.listeners}`} key={el.name}/>)}
            </div>
        );
};

// ArtistPage.propTypes = {};

export default ArtistPage;