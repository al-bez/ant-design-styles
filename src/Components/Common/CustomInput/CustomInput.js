import React from "react";
import s from './CustomInput.module.css'
import {Input} from "antd";

const CustomInput = ( {placeholder, icon, label} ) => {

    return (
        <div className={s.container}>
            <p className={s.label}>{label}</p>
            <div className={s.inputContainer}>
                <Input size="middle" placeholder={placeholder} suffix={icon}/>
            </div>
        </div>
    );
};

export default CustomInput;