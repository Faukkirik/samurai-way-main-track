import React from "react";
import s from './Post.module.css';
import {message} from "antd";


// type PropsTypeMessage = {
//     id: number
//     message: string
//     like: number
// }
export const Post = (props: any) => {
    return (
        <div className={s.posts}>
            <div className={s.item}>
                <img
                    src={"https://avatars.mds.yandex.net/i?id=a50b67ce42e2689293218e49b5b50ad4-6343405-images-thumbs&n=13"}/>
                {props.message}
                <div>
                    <span>like {props.like}</span>
                </div>
            </div>
        </div>)
}


