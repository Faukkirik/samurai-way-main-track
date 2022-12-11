import React from "react";
import s from './Profile.module.css';

export const Profile = () => {
    return (
        <div className={s.content}>
        <div>
            <img
                src={"https://avatars.mds.yandex.net/i?id=8e898d061411b4c4846cee67b1d4e064e95786c6-4484124-images-thumbs&n=13"}/>
        </div>
        <div>
            ava + description
        </div>
        <div>
            My posts
            <div>
                New post
            </div>
            <div className={s.posts}>
                <div className={s.item}>
                    post 1
                </div>
                <div className={s.item}>
                    post 2
                </div>
            </div>
        </div>
    </div>)
}