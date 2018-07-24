import React from 'react';
import Post from '../post/post';
import List from '../list/list';

const Main = () => {
    return (
        <div>
            <h1>Main component</h1>
            <Post title='Title 1' text='Paragraph 1' likes={10} date='01.01.2018'/>
            <Post title='Title 2' text='Paragraph 2' likes={100} date='02.02.2018'/>
            <Post title='Title 3' text='Paragraph 3' />
            <List arrNumbers = {[1,2,3,4,5,6,7,8,9]}/>
            <List arrNumbers = {[9,8,7,6,5,4,3,2,1]}/>
        </div>)
};

export default Main;