import style from './AdminHeader.module.css'

// @ts-ignore
export const AdminHeader = (HandleLogout) => {
    return (
        <header>
            <h1>Админ панель для голосования</h1>
            <button onClick={HandleLogout} className={style.btn_logout}>Выйти</button>
        </header>
    )
}