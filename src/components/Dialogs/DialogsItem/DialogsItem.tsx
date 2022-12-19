import React from "react";
import s from './../Dialogs.module.css';
import {NavLink} from "react-router-dom";

export type PropsTypeUsers = {
    id: number;
    name: string;
}

export const DialogItem = (props: PropsTypeUsers) => {
    let path = "/dialogs/" + props.id;
    return (
        <div className={s.dialog + ' ' + s.active}>
            <NavLink to={path} activeClassName={s.active}>{props.name}</NavLink>
        </div>
    )
}


