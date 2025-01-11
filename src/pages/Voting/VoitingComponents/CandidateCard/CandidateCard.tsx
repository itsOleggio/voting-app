import style from './CandidateCard.module.css';
import no_photo from '../../../../constant/Photo_Candidates/no_photo.jpg';

interface CandidateCardProps {
    name: string;
    city: string;
    age: number;
    onDetailsClick: () => void;
}

export const CandidateCard = ({ name, city, age, onDetailsClick }: CandidateCardProps) => {

    return (
        <div className={style.candidate_card} onClick={onDetailsClick}>
            <img src={no_photo} alt="" className={style.candidate_photo}/>
            <h3 className={style.candidate_name}>{name}</h3>
            <div className={style.candidate_text}>
                <span>{city},</span>
                <span>{age} лет</span>
            </div>
        </div>
    );
}

