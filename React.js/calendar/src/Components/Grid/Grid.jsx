import React, {Component} from 'react';
import Day from '../Day/Day';
import moment from "moment";
import {connect} from "react-redux";


class Grid extends Component {

    calcDays = () => {
        const start = moment(this.props.now.startOf('month')).startOf('week');
        const end = moment(this.props.now.endOf('month')).endOf('week');
        let days = Math.round(moment.duration(end - start).asDays());
        const matrix = [];
        for (let i = 0; i < days; i++) {
            let result = start.format("DD");
            matrix.push(result);
            result = start.add(1, "days").format("DD");
        }
        return matrix;
    };

    render() {
        let result = this.calcDays();
        return (
            <div className='row'>
                {result.map((el, i) => <Day day={el} key={el + i}/>)}
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        now: state.now,
    }
}


export default connect(mapStateToProps)(Grid);