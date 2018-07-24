import React from "react";
import PropTypes from 'prop-types';
// const Post = (props) => {
//     console.log(props);
//     return (<div>
//                 <h2>{props.title}</h2>
//                 <p>{props.text}</p>
//         <p>Likes: {props.likes}</p>
//         <p>date: {props.date}</p>
//             </div>)
// };

const Post = ({title, text, likes, date}) => {
    return (<div>
        <h2>{title}</h2>
        <p>{text}</p>
        <p>Likes: {likes}</p>
        <p>date: {date}</p>
    </div>)
};

Post.propTypes = {
    title: PropTypes.string.isRequired, //обязательное свойство
    text: PropTypes.string.isRequired,
    likes: PropTypes.number,
    date: PropTypes.string, //указание типа
};

Post.defaultProps= {
    likes:0,
    date: `${new Date()}`,
};

export default Post;