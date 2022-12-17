import React from "react";
import s from './Profile.module.css';
import {MyPosts} from "./MyPosts/MyPosts";

export const Profile = () => {
    return (
        <div>
            <div>
                <img
                    src={"https://avatars.mds.yandex.net/i?id=8e898d061411b4c4846cee67b1d4e064e95786c6-4484124-images-thumbs&n=13"}/>
            </div>
            <div>
                ava + description
            </div>
            <MyPosts/>
        </div>)
}