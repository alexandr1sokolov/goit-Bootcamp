import React from 'react';
import {Switch, Route, NavLink} from 'react-router-dom';
import './List.css'
import Card from "./Card";
// import PropTypes from 'prop-types';

const List = ({data,match}) => {
    return (
        <Switch>
            <Route path={`${match.path}/:lastname`} render={({match})=>{
                const result = data.find(el=> el.lastname === match.params.lastname);
                return <div>
                        <p>{result.name}</p>
                        <p>{result.lastname}</p>
                        </div>
            }}/>
            <Route>
                <div className='line'>
                    {data.map(el =>
                        <NavLink to={`${match.path}/${el.lastname}`} key={el.id}>
                            <Card name={el.name}
                                  lastname = {el.lastname}
                                  number={el.number}
                                  photo={el.photo}
                                  country = {el.country}
                            />
                        </NavLink>)}
                </div>
            </Route>
        </Switch>
    );
};

export default List;
