import React from "react";
import PropTypes from 'prop-types';
import './index.css'
// const List = ()=>{
//     const arrNumbers =[1,2,3,4,5,6,7,8,9];
//     // const items = arrNumbers.map(el=><li key={el}>{el}</li>);
//     return (
//         <ul>
//             {/*{items}*/}
//             {arrNumbers.map(el=><li key={el}>{el}</li>)}
//         </ul>
//
//     )
// };

const List = ({arrNumbers})=>{
    return (
        <ul className='list'>
            {arrNumbers.map(el=><li className='list__item' key={el}>{el}</li>)}
        </ul>
    )
};

List.propTypes ={
    arrNumbers: PropTypes.arrayOf(PropTypes.number),
};

export default List;