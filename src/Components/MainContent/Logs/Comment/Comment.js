import 'antd/dist/antd.css';
import s from './Comment.module.css'

function Comment( {time, comment} ) {

    return (
        <div className={s.container}>
            <p>{time}</p>
            <p>{comment}</p>
        </div>
    );
}

export default Comment;
