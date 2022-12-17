import React from "react";
import s from './ProfileInfo.module.css';

export const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img
                    src={"https://avatars.mds.yandex.net/i?id=8e898d061411b4c4846cee67b1d4e064e95786c6-4484124-images-thumbs&n=13"}/>
            </div>
            <div className={s.postsBlock}>
                ava + description

            </div>
        </div>
    )
}