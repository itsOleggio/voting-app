import style from './VoitingResults.module.css'

export const VoitingResults = () => {

    return(
        <>
            <h2>Итоги голосования</h2>
            <div className={style.block_result}>
                <div className={style.br_left}>
                    <span>Всего голосов</span>
                    <span>Вовлеченность</span>
                    <span>Количество голосов участника</span>
                </div>
                <div className={style.br_right}>
                {/*    Тут нужна столбчитая диаграмма*/}
                </div>
            </div>
        </>
    );
}