// @ts-expect-error
import {Footer, Header} from '../../components';
import {VoitingHeader} from "./VoitingComponents/VoitingHeader/VoitingHeader.tsx";
import {CandidateCard} from "./VoitingComponents/CandidateCard/CandidateCard";
import style from "./Voting.module.css";
import {useNavigate, useParams} from 'react-router-dom';
import {CodeMassage} from "./VoitingComponents/CodeMassage/CodeMassage.tsx";
import {InputCodeField} from "./VoitingComponents/InputCodeField/InputCodeField.tsx";
import votesData from '../../constant/Votes/votes.json';
import {useEffect} from "react";
import {MakeChoice} from "./VoitingComponents/MakeChoice/MakeChoice.tsx";

import { Candidate } from '../../constant/Candidates/candidates.types.tsx';
import candidatesData from "../../constant/Candidates/candidates.json";
import {ThanksForVoiting} from "./VoitingComponents/TnanksForVoiting/ThanksForVoiting.tsx";
import {VoitingResults} from "./VoitingComponents/VoitingResults/VoitingResults.tsx";

export const Voting = () => {
    const candidates: Candidate[] = candidatesData;
    const navigate = useNavigate();
    const {voteId} = useParams();

    const handleBackClick = () => {
        navigate(-1);
    };

    const CurrentVote = votesData.find((vote) => String(vote.voteId) === voteId);

    useEffect(() => {
        if(CurrentVote) {
            document.title = CurrentVote.title
        }
        else {
            document.title = "Голосование не найдено"
        }
    })

    if (!CurrentVote) {
        return (
            <>
                <Header/>
                <button className={style.back_button} onClick={handleBackClick}>Назад</button>
                <main>
                    <h2>Голосование не найдено</h2>
                </main>
                <Footer/>
            </>
        );
    }

    const filteredCandidates = candidates.filter(candidate => candidate.voteID === Number(voteId));

    return (
        <>
            <Header/>
            <button className={style.back_button} onClick={handleBackClick}>Назад</button>
            <VoitingHeader vote={CurrentVote}/>
            <main className={style.main_area}>
                <h2>Кандидаты</h2>

                {filteredCandidates.length === 0 && (
                    <h2>Кандидаты еще не добавлено</h2>
                )}

                <div className={style.candidatesArea}>
                    {filteredCandidates.map((candidate) => (
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

                {CurrentVote.status === 'Завершено' ? (
                    <VoitingResults votes={votesData} candidates={filteredCandidates} />

                ) : (
                    <>
                        <CodeMassage />
                        <InputCodeField />
                        <MakeChoice candidates={filteredCandidates}/>
                        <ThanksForVoiting />
                        <VoitingResults votes={votesData} candidates={filteredCandidates} />
                    </>
                )}

            </main>
            <h2>Вопросы и ответы</h2>
            <Footer/>
        </>
    );
};
