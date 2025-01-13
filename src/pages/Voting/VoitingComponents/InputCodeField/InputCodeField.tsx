import style from './InputCodeField.module.css';

export const InputCodeField = () => {

    return (
        <div className={style.inputCodeField}>
            <input type="text" className={style.inputCodeField_input} placeholder="Введите код для голосования"/>
            <button className={style.inputCodeField_button}>Отправить</button>
        </div>
    )
}