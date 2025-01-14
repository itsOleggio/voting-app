import style from './InputCodeField.module.css';

export const InputCodeField = () => {

    return (
        <>
            <h2>Код для голосования</h2>
            <div className={style.inputCodeField}>
                <input type="text" className={style.inputCodeField_input} placeholder="Введите код для голосования"/>
                <button className={style.inputCodeField_button}>Отправить</button>
            </div>
        </>

    )
}