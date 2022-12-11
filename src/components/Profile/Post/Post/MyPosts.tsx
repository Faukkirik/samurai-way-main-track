import React from "react";
import s from './MyPosts.module.css';

export const MyPosts = () => {
    return (
        <div>
            My posts
            <div>
                <textarea></textarea>
                <button>
                    Add post
                </button>
            </div>
            <div className={s.posts}>
                <div className={s.item}>
                    <img
                        src={"https://avatars.mds.yandex.net/i?id=a50b67ce42e2689293218e49b5b50ad4-6343405-images-thumbs&n=13"}/>
                    post 1
                </div>
                <div className={s.item}>
                    post 2
                </div>
            </div>
        </div>)
}