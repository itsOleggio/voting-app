import {useNavigate, useParams} from 'react-router-dom';
import style from './CandidateCard.module.css';
import no_photo from '../../../../constant/Photo_Candidates/no_photo.jpg';

interface CandidateCardProps {
    candidateId: number;
    name: string;
    city: string;
    age: number;
    photo?: string;
}

export const CandidateCard = ({ candidateId, name, city, age, photo}: CandidateCardProps) => {
    const navigate = useNavigate();

    const voteId = useParams().voteId;

    const handleDetailsClick = () => {
        navigate(`/voting/${voteId}/candidate/${candidateId}`);
    };

    return (
        <div className={style.candidate_card} onClick={handleDetailsClick}>
            {/*<div className={style.image_overlay}></div>*/}
            <img
                src={photo || no_photo}
                alt=""
                className={style.candidate_photo}
                onContextMenu={(e) => e.preventDefault()}
                onDragStart={(e) => e.preventDefault()}
            />
            <h3 className={style.candidate_name}>{name}</h3>
            <div className={style.candidate_text}>
                <span>{city} </span>
                <span>{age} лет</span>
            </div>
        </div>
    );
};
