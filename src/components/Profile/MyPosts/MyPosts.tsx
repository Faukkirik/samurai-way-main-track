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
        {id: 2, message: "It's my first post.", like: 27},
        {id: 3, message: "Oh, nooo.", like: 21},
    ]
    let postsElements = postData.map((post) => {
        return (<Post message={post.message} like={post.like} id={post.id}/>)
    })
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
                {postsElements}
                {/*<Post message={postData[0].message} like={postData[0].like} id={postData[0].id}/>*/}
            </div>
        </div>)
}