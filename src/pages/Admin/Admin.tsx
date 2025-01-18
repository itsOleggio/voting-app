import style from './Admin.module.css';
import {useEffect, useState} from 'react';
import {useNavigate} from "react-router-dom";
// @ts-ignore
import {NavigationMenuBar, AdminHeader} from "./AdminComponents";
import { generatePDF } from "../../utils/generatePDF.tsx";


type Vote = {
    candidateId: number;
    count: number;
    status: string;
};

type Candidate = {
    id: number;
    name: string;
    party: string;
};

export const Admin = () => {

    const[isAuth, setIsAuth] = useState(true); // ПОКА БЕЗ ЛОГИНА
    const[username, setUsername] = useState('');
    const[password, setPassword] = useState('');

    // @ts-ignore
    const [candidates, setCandidates] = useState<Candidate[]>([]);
    const [votes, setVotes] = useState<Vote[]>([]);

    useEffect(() => {
        fetch('src/constant/Candidates/candidates.types.tsx')
            .then(response => response.json())
            .then(data => setCandidates(data))
            .catch(error => console.error('Ошибка при загрузке кандидатов:', error));

        fetch('src/constant/Votes/votes.json')
            .then(response => response.json())
            .then(data => setVotes(data))
            .catch(error => console.error('Ошибка при загрузке голосований:', error));
    }, [])

    const activeVotes = votes.filter((vote) => vote.status === 'Активно');
    const finishedVotes = votes.filter((vote) => vote.status === 'Завершено');
    const notStartedVotes = votes.filter((vote) => vote.status === 'Не начато');

    const navigate = useNavigate();

    document.title = 'Админ панель для голосования | Главная';

    const adminCredentials = {
        username: 'admin',
        password: 'admin'
    }

    // @ts-ignore
    const handleLogin = (e) => {
        e.preventDefault();
        if(adminCredentials.username === username && adminCredentials.password === password){
            setIsAuth(true);
        }else{
            alert('Неправильный логин или пароль');
        }
    }

    const HandleLogout = () => {
        setIsAuth(false);
        navigate('/');
    }


    if(!isAuth){
        return (
            <div className={style.admin}>
                <h1>Админ панель для голосования</h1>
                <div className={style.auth_input}>
                    <form onSubmit={handleLogin}>
                        <input type="text" placeholder="Логин" onChange={(e) => setUsername(e.target.value)}/>
                        <input type="password" placeholder="Пароль" onChange={(e) => setPassword(e.target.value)}/>
                        <button type="submit">Войти</button>
                    </form>
                </div>
            </div>
        );
    }

    return (
        <div className={style.admin}>
            <AdminHeader HandleLogout={HandleLogout} />

            <main>
                <NavigationMenuBar/>
                <div className={style.status_work_area}>
                    <div className={style.status}>
                        <div className={style.status_info}>
                            <p>Всего голосований </p>
                            <span>{votes.length}</span>
                        </div>
                        <div className={style.status_info}>
                            <p>Активных голосований </p>
                            <span>{activeVotes.length}</span>
                        </div>
                        <div className={style.status_info}>
                            <p>Не начатых голосований </p>
                            <span>{finishedVotes.length}</span>
                        </div>
                        <div className={style.status_info}>
                            <p>Завершенных голосований</p>
                            <span>{notStartedVotes.length}</span>
                        </div>
                        <div className={style.status_info}>
                            {/*NEED FIX*/}
                            <p>Всего проголосовало </p>
                            <span>0</span>
                        </div>
                        <div className={style.status_info}>
                            {/*NEED FIX*/}
                            <p>Запросов на создание </p>
                            <span>0</span>
                        </div>
                    </div>
                    <button
                        className={style.generateReportButton}
                        onClick={() =>
                            generatePDF(
                                votes,
                                candidates,
                                adminCredentials.username,
                                new Date().toLocaleDateString()
                            )
                        }
                    >
                        Скачать отчет
                    </button>
                </div>


            </main>

        </div>
    );
}