import 'antd/dist/antd.css';
import s from './Information.module.css'
import InformationLine from "./InformationLine/InformationLine";
import CustomInput from "../../Common/CustomInput/CustomInput";
import {ReactComponent as CurrencyIcon} from "../../../Assets/currencyIcon.svg";
import FileUpload from "../../Common/FileUpload/FileUpload";
import React from "react";
import { ClockCircleOutlined } from '@ant-design/icons';
import {Button} from "antd";

function Information() {

    return (
        <div className={s.container}>
            <p className={s.header}>Information</p>
            <InformationLine firstValue={'Theme'} secondValue={'Famille | Divorce'} thirdValue={'Date d’affectation'} forthValue={'12/03/20'}/>
            <InformationLine firstValue={'Précision'} secondValue={'Sous divorce'} thirdValue={'Date d’affectation'} forthValue={'-'}/>
            <InformationLine firstValue={'Ville'} secondValue={'Paris'} thirdValue={'Date d’affectation'} forthValue={'-'}/>
            <div className={s.inputsContainer}>
                <div className={s.customInput}>
                    <CustomInput label={'Montant d’économie :'} placeholder={'Select amount'} icon={<CurrencyIcon/>}/>
                </div>
                <div className={s.customInput}>
                    <CustomInput label={'Temps consacré :'} placeholder={'Select time'} icon={<ClockCircleOutlined />}/>
                </div>
            </div>
            <FileUpload/>
            <Button type="primary">Forcer la clôture</Button>
        </div>
    );
}

export default Information;

