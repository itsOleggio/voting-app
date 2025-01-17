import React, { useState } from 'react';
import style from './MakeChoice.module.css';
import { Candidate } from '../../../../constant/candidates.types.tsx';

interface MakeChoiceProps {
    candidates: Candidate[];
}

export const MakeChoice: React.FC<MakeChoiceProps> = ({ candidates }) => {
    const [selectedCandidate, setSelectCandidate] = useState<number | null>(null);

    const handleChange = (candidateId: number) => {
        setSelectCandidate(candidateId);
    };

    const handleSubmit = () => {
        if (selectedCandidate !== null) {
            alert(`Вы выбрали кандидата с ID: ${selectedCandidate}`);
        } else {
            alert('Вы не выбрали кандидата');
        }
    };

    return (
        <>
            <div className={style.makeChoice}>
                <h2>Сделать выбор</h2>
                <div className={style.checkboxGroup}>
                    {candidates.map((candidate: Candidate) => (
                        <label key={candidate.candidateId} className={style.checkboxLabel}>
                            <input
                                type="checkbox"
                                value={candidate.candidateId}
                                checked={selectedCandidate === candidate.candidateId}
                                onChange={() => handleChange(candidate.candidateId)}
                                className={style.checkboxInput}
                            />
                            <span className={style.customCheckbox}></span>
                            {`${candidate.name}, ${candidate.city}, ${candidate.age} лет`}
                        </label>
                    ))}
                </div>
            </div>
            <button onClick={handleSubmit} className={style.submitButton}>
                Проголосовать
            </button>
        </>
    );
};
