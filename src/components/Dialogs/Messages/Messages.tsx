import React from "react";
import s from './../Dialogs.module.css';
import {NavLink} from "react-router-dom";


// export type PropsTypeMessage = {
//     id?: number
//     message: string;
// }


export const Message = (props: any) => {
    return (
        <div className={s.dialog}>{props.message}</div>
    )
}
