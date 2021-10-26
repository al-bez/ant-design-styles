import React from "react";
import s from './Header.module.css'
import {Button} from "antd";
import {ArrowLeftOutlined} from "@ant-design/icons";

const FileUpload = () => {

    return (
        <div className={s.container}>
            <div className={s.leftSection}>
                <Button type="primary" size="middle" ghost icon={<ArrowLeftOutlined/>}/>
                <p>Retour</p>
            </div>
            <div className={s.rightSection}>
                <Button type="primary">Sauvegarder</Button>
            </div>
        </div>
    );
};

export default FileUpload;
