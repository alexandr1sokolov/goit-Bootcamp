import React from 'react';
import { connect } from 'react-redux';
import Img from '../Img/Img';
import './Gallery.css'

const Gallery = ({imgArr}) => {
    return (
        <div className='content'>
            {imgArr.map((el, index) => <Img
                url={el.webformatURL}
                key={el.id}
            />)}
        </div>
    );
};

function mapStateToProps (state) {
    return {
        imgArr: state.gallery
    }
}

export default connect(mapStateToProps)(Gallery)

