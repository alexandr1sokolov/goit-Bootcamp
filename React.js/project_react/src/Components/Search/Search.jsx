import React from 'react';
import './Search.css'
import Chart from '../Chart/Chart'
import YouTube from "../YouTube/YouTube";
// import PropTypes from 'prop-types';

const Search = ({onChange,value, searchData, handlerYouTube, youtubeIsActive, videoId, sidebarHandler}) => {

    return (
        <div className='search'>
            {youtubeIsActive? <YouTube videoId={videoId} youTubeClose={handlerYouTube} handlerYouTube={handlerYouTube}/>:null}
            <form action="#" method="post" className="search__form" onSubmit={searchData}>
                <input type="text" className="search__input" value={value} placeholder="Search music" name='searchValue' onChange={onChange}/>
                <input type="submit" value="search" className="search__btn"/>
                <span className='burger' onClick={sidebarHandler}>&#9776;</span>
            </form>
            <Chart/>
        </div>
    );
};

// Search.propTypes = {};
// Search.defaultProps = {};

export default Search;
