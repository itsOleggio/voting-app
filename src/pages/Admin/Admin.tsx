import style from './Admin.module.css';
import { useState } from 'react';
import {useNavigate} from "react-router-dom";
import {NavigationMenuBar} from "./AdminComponents/NavigationMenuBar/NavigationMenuBar.tsx";
import {AdminHeader} from "./AdminComponents/AdminHeader/AdminHeader.tsx";


export const Admin = () => {

    const[isAuth, setIsAuth] = useState(true); // ПОКА БЕЗ ЛОГИНА
    const[username, setUsername] = useState('');
    const[password, setPassword] = useState('');

    const navigate = useNavigate();

    document.title = 'Админ панель для голосования';

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
            <AdminHeader username={username} HandleLogout={HandleLogout} />

            <main>
                <NavigationMenuBar/>
            </main>

        </div>
    );
}