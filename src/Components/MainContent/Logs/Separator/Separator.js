import 'antd/dist/antd.css';
import s from './Separator.module.css'

function Separator( {date} ) {

    return (
        <div className={s.container}>
            <p><span>{date}</span></p>
        </div>
    );
}

export default Separator;
