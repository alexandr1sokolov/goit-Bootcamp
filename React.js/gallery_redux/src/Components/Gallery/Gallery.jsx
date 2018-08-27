import React from 'react';
import { connect } from 'react-redux';
import {gallery,galleryLength,galleryAuthors} from '../../redux/selectors/gallerySelector'
import Img from '../Img/Img';
import './Gallery.css'

const Gallery = ({imgArr, galleryLength}) => {
    return (
        <div className='content'>
            <h2>gallery items count {galleryLength}</h2>
            {imgArr.map((el) => <Img url={el.webformatURL} key={el.id}/>)}
        </div>
    );
};

function mapStateToProps (state) {
    return {
        imgArr: gallery(state),                 // gallery(state) selector
        galleryLength: galleryLength(state),
    }
}

export default connect(mapStateToProps)(Gallery)

