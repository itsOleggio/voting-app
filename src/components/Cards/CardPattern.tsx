import { useNavigate } from 'react-router-dom';
import style from './CardPattern.module.css';
import vote_img from './Card_Assets/vote_icon.png';
import info from './Card_Assets/info.png';
import calendar from './Card_Assets/calendar.png';
import time from './Card_Assets/time.png';


// @ts-ignore
export const CardPattern = ({vote}) => {
    const navigate = useNavigate();

    const handleVoteClick = () => {
        navigate(`/voting/${vote.voteId}`);
    };

    return (
        <div className={style.main_patterns}>
            <div className={style.card_left_area}>
                <div className={style.card_text}>
                    <h1>{vote.title}</h1>
                    <h3>{vote.summary}</h3>
                </div>
                <div className={style.card_blocks}>
                    <div className={style.status}>
                        <img src={info} className={style.status_info} alt="" />
                        <span>{vote.status}</span>
                    </div>
                    <div className={style.last_2_blocks}>
                        <div className={style.date}>
                            <img src={calendar} className={style.status_info} alt="" />
                            <span>{vote.date}</span>
                        </div>
                        <div className={style.time}>
                            <img src={time} className={style.status_info} alt="" />
                            <span>{vote.time}</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className={style.card_right_area}>
                <img src={vote_img} alt="" className={style.vote_img} />
                <button className={style.card_button} onClick={handleVoteClick}>
                    Перейти к выборам
                </button>
            </div>
        </div>
    );
};
