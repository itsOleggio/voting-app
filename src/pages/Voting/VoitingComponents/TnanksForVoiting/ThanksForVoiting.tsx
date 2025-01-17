import style from './ThanksForVoiting.module.css';

export const ThanksForVoiting = () => {

    return (
        <div className={style.thanks_block}>
            <h2>Спасибо!</h2>
            <span>Ваш голос был учтен системой</span>
        </div>
    );
}