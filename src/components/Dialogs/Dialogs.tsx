import React from "react";
import s from './Dialogs.module.css';

export const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <div className={s.dialog + ' ' + s.active}>
                    Жека
                </div>
                <div className={s.dialog}>
                    Даник
                </div>
                <div className={s.dialog}>
                    Борис
                </div>
                <div className={s.dialog}>
                    Никита
                </div>
                <div className={s.dialog}>
                    Каменщик 4 разряда
                </div>
                <div className={s.dialog}>
                    Каменщик 5 разряда
                </div>
            </div>
            <div className={s.messages}>
                <div className={s.message}>HI</div>
                <div className={s.message}>Bue</div>
                <div className={s.message}>Yo</div>
            </div>
        </div>
    )
}