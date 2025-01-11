// @ts-expect-error
import { Footer, Header } from '../../components';
import {VoitingHeader} from "./VoitingComponents/VoitingHeader/VoitingHeader.tsx";
import { CandidateCard } from "./VoitingComponents/CandidateCard/CandidateCard";
import candidatesData from "../../constant/candidates.json";
import style from "./Voting.module.css";
import { useNavigate } from 'react-router-dom';
import {CodeMassage} from "./VoitingComponents/CodeMassage/CodeMassage.tsx";

export const Voting = () => {

    const navigate = useNavigate();

    const handleDetailsClick = (candidateName: string) => {
        alert(`Подробная информация о кандидате: ${candidateName}`);
    }

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
                            key={candidate.name}
                            name={candidate.name}
                            city={candidate.city}
                            age={candidate.age}
                            onDetailsClick={() => handleDetailsClick(candidate.name)}
                        />
                    ))}
                </div>
                <h2>Голосование</h2>
                <CodeMassage></CodeMassage>
                <h2>Код для голосования</h2>
            </main>
            <Footer/>
        </>
    );
};
