import React from 'react';
import {Switch, Route, NavLink} from 'react-router-dom';
import List from './List';
// import PropTypes from 'prop-types';

const Team =({data, match})=> {
    return (
        <div>
            <h2>First Team</h2>
            <nav>
                <NavLink to={`${match.path}/goalkeepers`}>GOALKEEPERS</NavLink>
                <NavLink to={`${match.path}/defenders`}>DEFENDERS</NavLink>
                <NavLink to={`${match.path}/midfielders`}>MIDFIELDERS</NavLink>
                <NavLink to={`${match.path}/forwards`}>FORWARDS</NavLink>
            </nav>
            <Switch>
                <Route path={`${match.path}/goalkeepers`} render={props =><List {...props} data={data.GK}/>}/>
                <Route path={`${match.path}/defenders`} render={props =><List {...props} data={data.DF}/>}/>
                <Route path={`${match.path}/midfielders`} render={props =><List {...props} data={data.MD}/>}/>
                <Route path={`${match.path}/forwards`} render={props =><List {...props} data={data.FW}/>}/>
            </Switch>
        </div>
    );
};

// Team.propTypes = {};
// Team.defaultProps = {};

export default Team;
