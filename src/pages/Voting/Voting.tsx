// @ts-expect-error
import { Footer, Header } from '../../components';
import {VoitingHeader} from "./VoitingComponents/VoitingHeader/VoitingHeader.tsx";
import { CandidateCard } from "./VoitingComponents/CandidateCard/CandidateCard";
import candidatesData from "../../constant/candidates.json";
import style from "./Voting.module.css";
import { useNavigate } from 'react-router-dom';
import {CodeMassage} from "./VoitingComponents/CodeMassage/CodeMassage.tsx";
import {InputCodeField} from "./VoitingComponents/InputCodeField/InputCodeField.tsx";

export const Voting = () => {

    const navigate = useNavigate();


    const handleBackClick = () =>{
        navigate(-1);
    }

    return (
        <>
            <Header />
            <button className={style.back_button} onClick={handleBackClick}>Назад</button>
            <VoitingHeader />
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
                        />
                    ))}
                </div>
                <h2>Голосование</h2>
                <CodeMassage></CodeMassage>
                <h2>Код для голосования</h2>
                <InputCodeField></InputCodeField>
            </main>
            <h2>Вопросы и ответы</h2>
            <Footer/>
        </>
    );
};
