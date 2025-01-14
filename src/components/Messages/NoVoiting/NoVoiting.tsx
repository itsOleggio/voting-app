import style from './NoVoiting.module.css';
import vote_img from '../../Cards/Card_Assets/vote_icon.png';

export const NoVoiting = () => {

    return (
        <div className={style.block_error}>
            <div className={style.block_error_text}>
                <h2>Активных голосований нет :(</h2>
                <span>Тут будут отображаться доступные голосования </span>
            </div>
            <div className={style.block_error_img}>
                <img src={vote_img} alt=""/>
            </div>
        </div>
    );
}