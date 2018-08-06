import React from 'react';
import './Menu.css';
import Submenu from '../Sub_menu/Sub_menu'
import PropTypes from 'prop-types';



const Menu = ({menu}) => {
    return (
        <ul>
            {menu.map(el => !el.submenu ?
                <li className="menu__item" key={el.text}>
                    <a href={el.link} className="menu__link">{el.text}</a>
                </li>
                :
                <li className="menu__item" key={el.text}>
                    <a href={el.link} className="menu__link">{el.text}</a>
                <Submenu sub={[
                    {text: 'Artists', link: `${el.text}Artists`, parentKey: el.text},
                    {text: 'Albums', link: `${el.text}Albums`, parentKey: el.text},
                    {text: 'Songs', link: `${el.text}Songs`, parentKey: el.text}
                ]}/>
            </li>)}
        </ul>
    )
};

Menu.propTypes ={
    menu: PropTypes.arrayOf(
        PropTypes.shape({
            text:PropTypes.string.isRequired,
            link: PropTypes.string.isRequired,
            submenu: PropTypes.bool.isRequired,
        }
    ))
};


export default Menu;