import React from 'react';
import { connect } from 'react-redux';
import {galleryAuthors} from '../../redux/selectors/gallerySelector';

const AuthorList =({authors})=>{
    return(
        <ul>
            {authors.map(el=><li key={el}>{el}</li>)}
        </ul>
    )
};

function mapStateToProps (state) {
    return {
       authors: galleryAuthors(state),
        }
}

export default connect(mapStateToProps)(AuthorList)

