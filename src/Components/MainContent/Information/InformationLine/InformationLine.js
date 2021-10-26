import React from "react";
import s from './InformationLine.module.css'

const InformationLine = ( {firstValue, secondValue, thirdValue, forthValue} ) => {

    return (
        <div className={s.container}>
            <p className={s.firstColumn}>{firstValue}</p>
            <p className={s.secondColumn}>{secondValue}</p>
            <p className={s.thirdColumn}>{thirdValue}</p>
            <p className={s.fourthColumn}>{forthValue}</p>
        </div>
    );
};

export default InformationLine;
