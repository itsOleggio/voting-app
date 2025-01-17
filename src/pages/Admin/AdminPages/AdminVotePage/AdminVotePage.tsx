import { useParams, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import votesData from '../../../../constant/Votes/votes.json';
import style from './AdminVotePage.module.css';

type Vote = {
    voteId: number;
    title: string;
    summary: string;
    status: string;
    date: string;
    time: string;
    candidates: number[];
};

export const AdminVotePage = () => {
    const { voteId } = useParams();
    const navigate = useNavigate();
    const [vote, setVote] = useState<Vote | null>(null);

    useEffect(() => {
        // Находим голосование по ID
        const foundVote = votesData.find((vote) => vote.voteId === parseInt(voteId!));
        if (foundVote) {
            setVote(foundVote);
        } else {
            navigate('/admin/votes'); // Перенаправление, если голосование не найдено
        }
    }, [voteId]);

    const handleBackClick = () => {
        navigate(-1);
    };

    const handleSave = () => {
        // Здесь будет логика сохранения изменений
        // Например, обновление данных в votes.json
        console.log('Голосование сохранено:', vote);
    };

    if (!vote) return <p>Загрузка...</p>;

    return (
        <div>
            <h1>Редактировать голосование: {vote.title}</h1>
            <button onClick={handleBackClick} className={style.btn_back}>Назад</button>
            <form className={style.form} >
                <div>
                    <label htmlFor="title">
                        <p>Название:</p>
                    </label>
                    <input
                        type="text"
                        id="title"
                        value={vote.title}
                        onChange={(e) => setVote({ ...vote, title: e.target.value })}
                    />
                </div>
                <div>
                    <label htmlFor="summary"><p>Описание:</p></label>
                    <textarea
                        id="summary"
                        value={vote.summary}
                        onChange={(e) => setVote({ ...vote, summary: e.target.value })}
                    />
                </div>
                <div>
                    <label htmlFor="status">
                        <p>
                        Статус:
                    </p>
                    </label>
                    <select
                        id="status"
                        value={vote.status}
                        onChange={(e) => setVote({ ...vote, status: e.target.value })}
                    >
                        <option value="active">Активно</option>
                        <option value="inactive">Завершено</option>
                        <option value="inactive">Не начато</option>
                        <option value="inactive">Архив</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="candidates">
                        <p>Кандидаты (ID через запятую):</p>
                    </label>
                    <input
                        type="text"
                        id="candidates"
                        value={vote.candidates.join(', ')}
                        onChange={(e) => setVote({ ...vote, candidates: e.target.value.split(',').map(Number) })}
                    />
                </div>
                <div className={style.btn_area}>
                    <button type="button" onClick={handleSave} className={style.btn_save}>Сохранить</button>
                    <button type="button" onClick={handleBackClick} className={style.btn_delete}>Удалить</button>
                </div>
            </form>
        </div>
    );
};
