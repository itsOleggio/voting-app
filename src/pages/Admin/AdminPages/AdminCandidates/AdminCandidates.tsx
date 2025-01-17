import style from './AdminCandidates.module.css';
// @ts-ignore
import {AdminHeader, NavigationMenuBar} from "../../AdminComponents";

export const AdminCandidates = () => {

    document.title = 'Админ панель для голосования | Кандидаты';
    return (
        <>
            <AdminHeader/>

            <div className={style.adminCandidates}>
                <NavigationMenuBar/>
                <span>Кандидаты</span>
            </div>
        </>
    );
}