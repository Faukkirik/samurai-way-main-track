import React from "react";
import s from './MyPosts.module.css';
import {Post} from "./Post/Post";



/*type PropsTypePostData = {
    id?: number
    message: string
    like: number
}*/
export const MyPosts = (/*props: PropsTypePostData*/) => {
    let postData = [
        {id: 1, message: "Hi, how are you?", like: 11},
        {id: 2, message: "It's my first post." , like: 27},
        {id: 3, message: "It's my first post." , like: 21},
        {id: 4, message: "It's my first post." , like: 21},
        {id: 5, message: "It's my first post." , like: 21},
    ]
    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>
                        Add post
                    </button>
                </div>
            </div>
            <div className={s.posts}>
                <Post message={postData[0].message} like={postData[0].like} id={postData[0].id}/>
                <Post message={postData[1].message} like={postData[1].like} id={postData[1].id}/>
            </div>
        </div>)
}