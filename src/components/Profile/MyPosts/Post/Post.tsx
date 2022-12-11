import React from "react";
import s from './Post.module.css';

export const Post = () => {
    return (
        <div className={s.posts}>
            <div className={s.item}>
                <img
                    src={"https://avatars.mds.yandex.net/i?id=a50b67ce42e2689293218e49b5b50ad4-6343405-images-thumbs&n=13"}/>
                post 1
                <div>
                    <span>like</span>
                </div>
            </div>
        </div>)
}