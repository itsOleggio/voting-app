import style from "./AdminRequest.module.css";
// @ts-ignore
import {NavigationMenuBar, AdminHeader} from "../../AdminComponents";

export const AdminRequest = () => {

    document.title = 'Админ панель для голосования | Заявки';

    return (
        <>
            <AdminHeader/>
            <div className={style.adminRequest}>
                <NavigationMenuBar/>
                <span>Заявки</span>
            </div>
        </>

    )
}
