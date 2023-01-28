import React from "react";
import s from './MyPosts.module.css';
import {Post} from "./Post/Post";



export const MyPosts = (props:any) => {

    let postsElements = props.postData.map((posts: any) => {
        return (<Post message={posts.message} like={posts.like} id={posts.id}/>)
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