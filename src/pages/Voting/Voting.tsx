// @ts-expect-error
import {Footer, Header} from '../../components';
import {VoitingHeader} from "./VoitingComponents/VoitingHeader/VoitingHeader.tsx";
import {CandidateCard} from "./VoitingComponents/CandidateCard/CandidateCard";
import candidatesData from "../../constant/candidates.json";
import style from "./Voting.module.css";
import {useNavigate, useParams} from 'react-router-dom';
import {CodeMassage} from "./VoitingComponents/CodeMassage/CodeMassage.tsx";
import {InputCodeField} from "./VoitingComponents/InputCodeField/InputCodeField.tsx";
import votesData from '../../constant/votes.json';

export const Voting = () => {

    const navigate = useNavigate();

    const handleBackClick = () => {
        navigate(-1);
    }

    const {voteId} = useParams();

    const CurrentVote = votesData.find((vote) => String(vote.voteId) === voteId);

    return (
        <>
            <Header/>
            <button className={style.back_button} onClick={handleBackClick}>Назад</button>
            <VoitingHeader vote={CurrentVote}/>
            <main>
                <h2>Кандидаты</h2>
                <div className={style.candidatesArea}>
                    {candidatesData.map((candidate) => (
                        <CandidateCard
                            key={candidate.candidateId}
                            candidateId={candidate.candidateId}
                            name={candidate.name}
                            city={candidate.city}
                            age={candidate.age}
                            photo={candidate.photo}
                        />
                    ))}
                </div>
                <CodeMassage/>
                <InputCodeField/>
            </main>
            <h2>Вопросы и ответы</h2>
            <Footer/>
        </>
    );
};
