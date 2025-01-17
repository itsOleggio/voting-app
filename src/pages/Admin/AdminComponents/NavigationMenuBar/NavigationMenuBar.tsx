import { NavLink } from "react-router-dom";
import style from "./NavigationMenuBar.module.css";

export const NavigationMenuBar = () => {
    return (
        <nav className={style.navBar}>
            <ul className={style.navList}>
                <li className={style.navItem}>
                    <NavLink
                        to="/admin"
                        className={({ isActive }) => (isActive && window.location.pathname === '/admin' ? style.active : "")}
                    >
                        Главная
                    </NavLink>
                </li>
                <li className={style.navItem}>
                    <NavLink
                        to="/admin/votes"
                        className={({ isActive }) => isActive ? style.active : ""}
                    >
                        Голосования
                    </NavLink>
                </li>
                <li className={style.navItem}>
                    <NavLink
                        to="/admin/candidates"
                        className={({ isActive }) => isActive ? style.active : ""}
                    >
                        Кандидаты
                    </NavLink>
                </li>
                <li className={style.navItem}>
                    <NavLink
                        to="/admin/requests"
                        className={({ isActive }) => isActive ? style.active : ""}
                    >
                        Запросы
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
};
