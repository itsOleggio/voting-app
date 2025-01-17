import style from './AdminHeader.module.css'

interface AdminHeaderProps {
    HandleLogout: () => void;
}

export const AdminHeader = ( { HandleLogout }: AdminHeaderProps) => {
    return (
        <header>
            <h1>Админ панель для голосования</h1>
            <button onClick={HandleLogout} className={style.btn_logout}>Выйти</button>
        </header>
    )
}