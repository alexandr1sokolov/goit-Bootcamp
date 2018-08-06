import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './YouTube.css'

class YouTube extends Component {

    state = {};

    render() {
        return (
            <div>
                <iframe width="300" height="180" src="https://www.youtube.com/embed/{{videoId}}?feature=oembed"
                        frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen>
                </iframe>
            </div>
        );
    }
}

export default YouTube;
