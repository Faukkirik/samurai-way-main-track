import React from "react";
import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";

type PropsTypeUsers = {
    id: number;
    name: string;
}
type PropsTypeMessage = {
    message: string;
}
const DialogItem = (props:PropsTypeUsers) => {
    let path = "/dialogs/" + props.id;
    return (
        <div className={s.dialog + ' ' + s.active}>
            <NavLink to={path} activeClassName={s.active}>{props.name}</NavLink>
        </div>
    )
}

const Message = (props:PropsTypeMessage) => {
    return (
<div className={s.dialog}>{props.message}</div>
    )
}
export const Dialogs = (props:PropsTypeUsers) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItem name="Женя" id={1}/>
                <DialogItem name="Даник" id={2}/>
                <DialogItem name="Борис" id={3}/>
                <DialogItem name="Никита" id={4}/>
                <DialogItem name="Каменщик 4 разряда" id={5}/>
                <DialogItem name="Каменщик 5 разряда" id={6}/>
            </div>
            <div className={s.messages}>
                <Message message={"Hi"}/>
                <Message message={"Yo"}/>
                <Message message={"Bue"}/>
            </div>
        </div>
    )
}