import React from 'react';
import './Chart.css'
import {NavLink} from 'react-router-dom'
// import PropTypes from 'prop-types';

const Chart = (props) => {
    return (
        <div>
            <ul className="chart-list">
                <li>
                    <NavLink exact to='/' activeClassName="selected" className="chart-list__item">
                        Artists
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/albums' activeClassName="selected" className="chart-list__item">
                        Albums
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/songs' activeClassName="selected" className="chart-list__item">
                        Songs
                    </NavLink>
                </li>
            </ul>
        </div>
    );
};

// Chart.propTypes = {};
// Chart.defaultProps = {};

export default Chart;
