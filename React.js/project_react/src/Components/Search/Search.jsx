import React from 'react';
import './Search.css'
import Chart from '../Chart/Chart'
// import PropTypes from 'prop-types';

const Search = ({onChange,value, searchData}) => {
    return (
        <div className='search'>
            <form action="#" method="post" className="search__form" onSubmit={searchData}>
                <input type="text" className="search__input" value={value} placeholder="Search music" name='searchValue' onChange={onChange}/>
                <input type="submit" value="search" className="search__btn"/>
            </form>
            <Chart/>
        </div>
    );
};

// Search.propTypes = {};
// Search.defaultProps = {};

export default Search;
