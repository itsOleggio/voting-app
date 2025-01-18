import style from './AdminAddVote.module.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const AdminAddVote = () => {
    const navigate = useNavigate();

    const [voteData, setVoteData] = useState({
        title: '',
        summary: '',
        status: '',
        StartDate: '',
        EndDate: '',
        StartTime: '',
        EndTime: '',
        candidates: []
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setVoteData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleTextAreaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setVoteData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleAddVote = () => {
        // Здесь будет логика для добавления голосования
        // Например, отправка данных на сервер или сохранение в глобальный стейт

        console.log('Голосование добавлено', voteData);
        navigate('/votes');
    };

    const handeBack = () => {
        navigate('/admin/votes');
    }

    return (
        <div className={style.adminAddVote}>
            <h2>Добавить новое голосование</h2>
            <button onClick={handeBack} className={style.btn_back}>Назад</button>
            <div className={style.formContainer}>
                <label>
                    Заголовок:
                    <input
                        type="text"
                        name="title"
                        value={voteData.title}
                        onChange={handleInputChange}
                        placeholder="Введите заголовок голосования"
                    />
                </label>
                <label>
                    Описание:
                    <textarea
                        name="summary"
                        value={voteData.summary}
                        onChange={handleTextAreaChange}
                        placeholder="Введите описание голосования"
                    />
                </label>
                {/*<label>*/}
                {/*    Статус:*/}
                {/*    <select*/}
                {/*        name="status"*/}
                {/*        value={voteData.status}*/}
                {/*        onChange={handleInputChange}*/}
                {/*    >*/}
                {/*        <option value="" disabled>Выберите статус</option>*/}
                {/*        <option value="Активно">Активно</option>*/}
                {/*        <option value="Завершено">Завершено</option>*/}
                {/*        <option value="Не начато">Не начато</option>*/}
                {/*    </select>*/}
                {/*</label>*/}

                <label>
                    Дата конца:
                    <input
                        type="date"
                        name="date"
                        value={voteData.StartDate}
                        onChange={handleInputChange}
                        placeholder="Введите дату"
                    />
                </label>
                <label>
                    Дата конца:
                    <input
                        type="date"
                        name="date"
                        value={voteData.EndDate}
                        onChange={handleInputChange}
                        placeholder="Введите дату"
                    />
                </label>
                <label>
                    Время начала:
                    <input
                        type="time"
                        name="time"
                        value={voteData.StartTime}
                        onChange={handleInputChange}
                        placeholder="Введите время"
                    />
                </label>
                <label>
                    Время конца:
                    <input
                        type="time"
                        name="time"
                        value={voteData.EndTime}
                        onChange={handleInputChange}
                        placeholder="Введите время"
                    />
                </label>
                <label>
                    Кандидаты (ID через запятую):
                    <input
                        type="text"
                        name="candidates"
                        value={voteData.candidates.join(', ')}
                        onChange={(e) => handleInputChange(e)}
                        placeholder="Введите ID кандидатов"
                    />
                </label>
                <button onClick={handleAddVote} className={style.btn_add}>Добавить голосование</button>
            </div>
        </div>
    );
};
