// @ts-ignore
import {Footer, Header} from "../../components";
import style from "./NoFound.module.css";



export const NoFound = () => {

    const handleBackClick = () => {
        window.history.back();
    }

    return (
        <>
            <Header/>
            <button onClick={handleBackClick} className={style.bnt_back}>На главную страницу</button>
            <div className={style.block_error}>
                <h2>404</h2>
                <span>Страница не найдена</span>
            </div>
            <Footer/>
        </>
    );
}