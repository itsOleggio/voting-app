import style from './Footer.module.css';
import itmo_logo from '../../assets/logo_itmo.png';

export const Footer = () => {
    return (
        <footer className={style.footer}>
            <div className={style.first_block}>
                <h3>Цифровая среда для проведения выборов и голосования</h3>
                <span>© 2024-2025</span>
                <span>Проект для курса по «Технологии разработки информационных систем» Найденов Олег, Горбенко Артём</span>
            </div>
            <div className={style.second_block}>
                <a href="#" className={style.a_upper}>О Системе</a>
                <div className={style.second_block_lowers}>
                    <a href="#">Закрытое голосование</a>
                    <a href="#">Запрос на создание голосования</a>
                    <a href="#">Техническая поддержка</a>
                </div>
            </div>
            <div className={style.third_block}>
                <img src={itmo_logo} alt="" className={style.logo}/>
            </div>
        </footer>
    );
}