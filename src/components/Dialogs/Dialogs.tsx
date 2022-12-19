import React from "react";
import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";

type PropsTypeUsers = {
    id: number;
    name: string;
}
type PropsTypeMessage = {
    id?: number
    message: string;
}
const DialogItem = (props: PropsTypeUsers) => {
    let path = "/dialogs/" + props.id;
    return (
        <div className={s.dialog + ' ' + s.active}>
            <NavLink to={path} activeClassName={s.active}>{props.name}</NavLink>
        </div>
    )
}

const Message = (props: PropsTypeMessage) => {
    return (
        <div className={s.dialog}>{props.message}</div>
    )
}
export const Dialogs = (props: PropsTypeUsers) => {
    let dialogsData = [
        {id: 1, name: "Женя"},
        {id: 2, name: "Даник"},
        {id: 3, name: "Борис"},
        {id: 4, name: "Никита"},
        {id: 5, name: "Каменщик"},
        {id: 6, name: "Бетонщик"},
    ]
    let messagesData = [
        {id: 1, message: "Hi"},
        {id: 2, message: "Yo"},
        {id: 3, message: "Bye"},
        {id: 4, message: "Hello"},
        {id: 5, message: "<>!&7r>"},
    ]
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItem name={dialogsData[0].name} id={dialogsData[0].id}/>
                <DialogItem name={dialogsData[1].name} id={dialogsData[1].id}/>
                <DialogItem name={dialogsData[2].name} id={dialogsData[2].id}/>
                <DialogItem name={dialogsData[3].name} id={dialogsData[3].id}/>
                <DialogItem name={dialogsData[4].name} id={dialogsData[4].id}/>
                <DialogItem name={dialogsData[5].name} id={dialogsData[5].id}/>
            </div>
            <div className={s.messages}>
                <Message message={messagesData[0].message}/>
                <Message message={messagesData[1].message}/>
                <Message message={messagesData[2].message}/>
            </div>
        </div>
    )
}