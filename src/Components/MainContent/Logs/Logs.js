import 'antd/dist/antd.css';
import s from './Logs.module.css'
import Comment from "./Comment/Comment";
import Separator from "./Separator/Separator";
import {Input} from "antd";

function Logs() {

    return (
        <div className={s.container}>
            <p className={s.header}>Logs</p>
            <div className={s.content}>
                <Comment time={'18:20'} comment={'Комментарий'}/>
                <Separator date={'21 Août 2021'}/>
                <Comment time={'18:20'} comment={'Utilisateur retiré du système utilisateur retiré du système système utilisateur retiré du systèmesystème utilisateur retiré du systèmesystème utilisateur retiré du systèmesystème utilisateur retiré du systèmesystème utilisateur retiré du système'}/>
                <Comment time={'16:01'} comment={'Комментарий'}/>
                <Comment time={'12:35'} comment={'Комментарий'}/>
                <Separator date={'23 Août 2021'}/>
                <Comment time={'18:20'} comment={'Комментарий'}/>
                <div className={s.inputField}>
                    <Input placeholder="Введите текст" />
                </div>
            </div>
        </div>
    );
}

export default Logs;
