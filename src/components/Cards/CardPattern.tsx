import style from './CardPattern.module.css';
import vote_img from './Card_Assets/vote_icon.png';
import info from './Card_Assets/info.png';
import calendar from './Card_Assets/calendar.png';
import time from './Card_Assets/time.png';

export const CardPattern = () => {
    return (
        <div className={style.main_patterns}>
            <div className={style.card_left_area}>
                <div className={style.card_text}>
                    <h1>Название голосования</h1>
                    <h3>Краткое содержание</h3>
                </div>
                <div className={style.card_blocks}>
                    <div className={style.status}>
                        <img src={info} className={style.status_info} alt=""/>
                        <span>Статус</span>
                    </div>
                    <div className={style.last_2_blocks}>
                        <div className={style.date}>
                            <img src={calendar} className={style.status_info} alt=""/>
                            <span>** месяц 20**</span>
                        </div>
                        <div className={style.time}>
                            <img src={time} className={style.status_info} alt=""/>
                            <span>с **:** до **:**</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className={style.card_right_area}>
                <img src={vote_img} alt="" className={style.vote_img}/>
                <button className={style.card_button}>Перейти к выборам</button>
            </div>
        </div>
    );
};