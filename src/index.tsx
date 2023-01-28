import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

export let posts = [
    {id: 1, message: "Hi, how are you?", like: 11},
    {id: 2, message: "It's my first post.", like: 27},
    {id: 3, message: "Oh, nooo.", like: 21},
]

ReactDOM.render(
    <App posts={posts}/>,
  document.getElementById('root')
);