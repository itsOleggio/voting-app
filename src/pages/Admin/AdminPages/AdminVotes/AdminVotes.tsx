import style from './AdminVotes.module.css';
// @ts-ignore
import { NavigationMenuBar, AdminHeader } from '../../AdminComponents/';
import { useState, useEffect } from "react";
import votesData from '../../../../constant/Votes/votes.json';
import { useNavigate } from 'react-router-dom';

type Vote = {
    voteId: number;
    title: string;
    summary: string;
    status: string;
    date: string;
    time: string;
    candidates: number[];
};

export const AdminVotes = () => {
    const [votes, setVotes] = useState<Vote[]>([]); // отображаемые данные
    const [filteredVotes, setFilteredVotes] = useState<Vote[]>([]); // отфильтрованные данные
    const [searchID, setSearchID] = useState<string>(''); // строка поиска
    const [sortOption, setSortOption] = useState<string>(''); // текущий критерий сортировки
    const navigate = useNavigate();

    useEffect(() => {
        setVotes(votesData);
        setFilteredVotes(votesData); // инициализируем отфильтрованный список
    }, []);

    // Обработчик поиска
    const handleSearch = () => {
        if (searchID) {
            const filtered = votes.filter(vote =>
                vote.voteId.toString().includes(searchID)
            );
            setFilteredVotes(filtered);
        } else {
            setFilteredVotes(votes); // Возвращаем все голосования
        }
    };

    // Обработчик сортировки
    const handleSort = (option: string) => {
        setSortOption(option);
        const sortedVotes = [...filteredVotes];
        if (option === 'id') {
            sortedVotes.sort((a, b) => a.voteId - b.voteId); // Сортировка по ID
        } else if (option === 'time') {
            sortedVotes.sort((a, b) => {
                const dateTimeA = new Date(`${a.date}T${a.time}`);
                const dateTimeB = new Date(`${b.date}T${b.time}`);
                return dateTimeA.getTime() - dateTimeB.getTime(); // Сортировка по времени
            });
        }
        setFilteredVotes(sortedVotes);
    };

    const handleVoteClick = (voteId: number) => {
        navigate(`/admin/vote/${voteId}`)
    }

    const HandleLogout = () => {
        navigate('/');
    }

    document.title = 'Админ панель для голосования | Голосования';

    // @ts-ignore
    return (
        <>
            <AdminHeader HandleLogout={HandleLogout} />
            <div className={style.adminVotes}>
                <NavigationMenuBar />
                <div className={style.RightBlock}>

                    <div className={style.controls}>

                        <select onChange={(e) => handleSort(e.target.value)} value={sortOption}>
                            <option value="">Сортировать по</option>
                            <option value="id">ID</option>
                            <option value="time">Время</option>
                        </select>

                        <input
                            type="text"
                            placeholder="Поиск по ID"
                            value={searchID}
                            onChange={(e) => setSearchID(e.target.value)}
                        />
                        <button onClick={handleSearch}>Искать</button>
                        <button>Добавить голосование</button>

                    </div>

                    {/* Список голосований */}
                    <div className={style.voteList}>
                        {filteredVotes.length > 0 ? (
                            filteredVotes.map((vote) => (
                                <div
                                    key={vote.voteId}
                                    className={style.voteItem}
                                    onClick={() => handleVoteClick(vote.voteId)}
                                >
                                <h3>{'ID:' + vote.voteId + ' ' + vote.title}</h3>
                                    <p>{vote.summary}</p>
                                    <p><strong>Статус:</strong> {vote.status}</p>
                                    <p><strong>Дата:</strong> {vote.date} <strong>Время:</strong> {vote.time}</p>
                                    <p><strong>Кандидаты:</strong> {vote.candidates.join(', ')}</p>
                                </div>
                            ))
                        ) : (
                            <p>Нет доступных голосований</p>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
};
