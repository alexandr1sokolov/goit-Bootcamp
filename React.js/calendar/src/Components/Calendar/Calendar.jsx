import React from 'react';
import {connect} from 'react-redux';
import './Calendar.css';
import WeekDays from '../WeekDays/WeekDays'
import Grid from '../Grid/Grid';
import {nextMonth, prevMonth} from '../../redux/actions/nowActions';

const Calendar = ({prevMonthFunc, now, nextMonthFunc}) => {
    return (
        <div className='calendar'>
            <header className="header">
                <div className="month-display row">
                    <span className='arrow' onClick={prevMonthFunc}>&#8656;</span>
                    <span className="month-label">{`${now.format('MMMM')} ${now.year()}`}</span>
                    <span className='arrow' onClick={nextMonthFunc}>&#8658;</span>
                </div>
                <WeekDays/>
            </header>
            <Grid/>
        </div>
    )
};

function mapStateToProps(state) {
    return {
        now: state.now,
        days: state.days,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        nextMonthFunc: function () {
            dispatch(nextMonth())
        },
        prevMonthFunc: function () {
            dispatch(prevMonth())
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Calendar);