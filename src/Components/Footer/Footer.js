import React from "react";
import s from './Footer.module.css'
import {Button} from "antd";

const Footer = () => {

    return (
        <div className={s.container}>
            <div className={s.leftSection}>
                <div className={s.wrapper}>
                    <p>Простая консультация</p>
                    <p>Простая консультация</p>
                </div>
                <p>Fiche client</p>
            </div>
            <div className={s.rightSection}>
                <Button type="primary" danger>Forcer la clôture</Button>
            </div>
        </div>
    );
};

export default Footer;