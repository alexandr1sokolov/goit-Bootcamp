import React, {Component} from 'react';
import './Search.css'
import { connect } from 'react-redux';
import {input} from '../../redux/actions/inputActions';
import {GallerySearchAsync} from '../../redux/actions/galleryActions'



class Search extends Component {

    inputHandler =(event)=>{
        event.preventDefault();
        if(this.props.text !== ''){
            this.props.searchFunc(this.props.text);
        }
    };

    render() {
        return (
            <div className='search'>
                <form action="#" onSubmit={this.inputHandler} method="post"
                      className="search__form">
                    <input type="text" className="search__input" value={this.props.text} onChange={this.props.inputChange} placeholder="Search"
                           name='searchValue'/>
                    <input type="submit" value="search" className="search__btn"/>
                </form>
            </div>
        )
    }
}


function mapStateToProps (state) {
    return {
        text: state.input
    }
}

function mapDispatchToProps (dispatch) {
    return {
        inputChange: function({target}) {
            dispatch(input(target.value))
        },
        searchFunc: function(text) {
            dispatch(GallerySearchAsync(text))
        },
}}

export default connect(mapStateToProps, mapDispatchToProps) (Search)
