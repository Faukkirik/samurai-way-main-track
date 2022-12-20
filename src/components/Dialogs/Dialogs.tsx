import React from "react";
import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";
import {DialogItem, PropsTypeUsers} from "./DialogsItem/DialogsItem";
import {Message, PropsTypeMessage} from "./Messages/Messages";


type PropsTypeDialogs = {
    dialog?: Array<PropsTypeUsers>
    message?: Array<PropsTypeMessage>
}
export const Dialogs = (props: PropsTypeDialogs ) => {
    let dialogsData = [
        {id: 1, name: "Женя"},
        {id: 2, name: "Даник"},
        {id: 3, name: "Борис"},
        {id: 4, name: "Никита"},
        {id: 5, name: "Каменщик"},
        {id: 6, name: "Бетонщик"},
    ]
    let dialogsElements = dialogsData.map( (dialog) => {
        return (<DialogItem name={dialog.name} id={dialog.id}/>)
    })
    let messagesData = [
        {id: 1, message: "Hi"},
        {id: 2, message: "Yo"},
        {id: 3, message: "Bye"},
        {id: 4, message: "Hello"},
        {id: 5, message: "<>!&7r>"},
    ]
    let messagesElements = messagesData.map( (message) => {
        return (<Message message={message.message}/>)
    })
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
                {/*<Message message={messagesData[0].message}/>*/}
            </div>
        </div>
    )
}