import React from 'react';
import './Chart.css'
// import PropTypes from 'prop-types';

const Chart = (props) => {
    return (
        <div>
            <ul className="chart-list">
                <li className="chart-list__item">Artists</li>
                <li className="chart-list__item">Albums</li>
                <li className="chart-list__item">Songs</li>
            </ul>
        </div>
    );
};

// Chart.propTypes = {};
// Chart.defaultProps = {};

export default Chart;
