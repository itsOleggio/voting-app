import style from './VoitingHeader.module.css';
import calendar from "../../../../components/Cards/Card_Assets/calendar.png";
import time from "../../../../components/Cards/Card_Assets/time.png";
import info from "../../../../components/Cards/Card_Assets/info.png";


// @ts-ignore
export const VoitingHeader = ({vote}) => {
    return (
        <div className={style.header}>
            <h1>{vote.title}</h1>
            <h3>{vote.summary}</h3>
            <div className={style.blocks}>
                <div className={style.status}>
                    <img src={info} className={style.status_info} alt=""/>
                    <span>{vote.status}</span>
                </div>
                <div className={style.date}>
                    <img src={calendar} className={style.status_info} alt=""/>
                    <span>{vote.date}</span>
                </div>
                <div className={style.time}>
                    <img src={time} className={style.status_info} alt=""/>
                    <span>{vote.time}</span>
                </div>
            </div>
        </div>
    );
};