import React, { Component } from 'react';
import { connect } from 'react-redux';
import Gallery from './Components/Gallery/Gallery';
import Sidebar from './Components/Sidebar/Sidebar';
import Search from './Components/Search/Search';
import {StandartGallerySearchAsync} from './redux/actions/galleryActions';
import AuthorList from './Components/AuthorList/AuthorList';
import './App.css';

class App extends Component {

    componentDidMount() {
        this.props.galleryFetch('editors_choice');
    };

    render() {
        return(
            <div className='wrapper'>
                <div className="container">
                    <Sidebar/>
                    <main className='main'>
                        <Search/>
                        <div className='loader'>
                            <Gallery/>
                            <AuthorList/>
                        </div>
                    </main>
                </div>
            </div>
        )
    }
}

function mapDispatchToProps (dispatch) {
    return {
        galleryFetch(category){
            dispatch(StandartGallerySearchAsync(category))
        }
    }
}

export default connect(null, mapDispatchToProps) (App);

