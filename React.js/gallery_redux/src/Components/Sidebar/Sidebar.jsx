import React from 'react';
import { connect } from 'react-redux';
import {StandartGallerySearchAsync} from '../../redux/actions/galleryActions'
import './Sidebar.css';

const Sidebar = (props) => {
    return (
        <aside>
            <button name='fashion' onClick={props.categorySearch}>FASHION</button>
            <button name='nature' onClick={props.categorySearch}>NATURE</button>
            <button name='science' onClick={props.categorySearch}>SCIENCE</button>
            <button name='animals' onClick={props.categorySearch}>ANIMALS</button>
        </aside>
    )
};

function mapDispatchToProps (dispatch) {
    return {
        categorySearch: function({target}) {
            dispatch(StandartGallerySearchAsync(target.name))
        },
    }
}

export default connect(null, mapDispatchToProps) (Sidebar);