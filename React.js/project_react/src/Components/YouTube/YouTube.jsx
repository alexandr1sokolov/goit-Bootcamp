import React from 'react';
import './YouTube.css'
// import PropTypes from 'prop-types';

const YouTube = ({videoId, handlerYouTube}) => {
    let url = `https://www.youtube.com/embed/${videoId}?autoplay=1`;
    return (
        <div className='player'>
            <p className='close' onClick={handlerYouTube}>&#10006;</p>
            <iframe width="100%" height="180" src={url}
                    frameBorder="0" allowFullScreen>
            </iframe>
        </div>
    );
};

// YouTube.propTypes = {};
// YouTube.defaultProps = {};

export default YouTube;
