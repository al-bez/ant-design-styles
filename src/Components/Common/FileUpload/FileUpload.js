import React from "react";
import s from './FileUpload.module.css'
import {ReactComponent as ClipIcon} from "../../../Assets/clipIcon.svg";
import {ReactComponent as DeleteIcon} from "../../../Assets/deleteIcon.svg";

const FileUpload = () => {

    return (
        <div className={s.container}>
            <p className={s.label}>Document d'appui :</p>
            <div className={s.uploadField}>
                <label htmlFor="uploader"><ClipIcon/></label>
                <input id="uploader" type="file" style={{display: 'none'}}/>
            </div>
            <p className={s.inputFile}>filename.png</p>
            <div className={s.deleteIcon}>
                <DeleteIcon/>
            </div>
        </div>
    );
};

export default FileUpload;