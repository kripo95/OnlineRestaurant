import React from "react";
import style from './header.module.css'
export default function Header(){
    //<BackPage />
    return(
        <div className={style.wrapperHeader}>
            <h1 className={style.h1}>FoodAtHome</h1>
        </div>
    )
}