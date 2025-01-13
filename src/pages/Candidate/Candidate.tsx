import style from './Candidate.module.css';
import { useNavigate, useParams } from 'react-router-dom';
import candidatesData from "../../constant/candidates.json";

export const Candidate = () => {

    const { candidateId } = useParams<{ candidateId: string }>();
    const navigate = useNavigate();

    const candidate = candidatesData.find(c => c.candidateId === Number(candidateId));

    if (!candidate) {
        return <div>Кандидат не найден</div>
    }

    return (
        <div className={style.candidate_area}>
            <h1>{candidate.name}</h1>
            <p>{candidate.description}</p>
            <button className={style.back_button} onClick={() => navigate(-1)}>Назад</button>
        </div>
    );
}