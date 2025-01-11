import style from './VoitingHeader.module.css';
import calendar from "../../../../components/Cards/Card_Assets/calendar.png";
import time from "../../../../components/Cards/Card_Assets/time.png";
import info from "../../../../components/Cards/Card_Assets/info.png";

export const VoitingHeader = () => {
    return (
        <div className={style.header}>
            <h1>Название голосования</h1>
            <h3>Описание голосования</h3>
            <div className={style.blocks}>
                <div className={style.status}>
                    <img src={info} className={style.status_info} alt=""/>
                    <span>Статус</span>
                </div>
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
    );
};