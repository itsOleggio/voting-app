import style from './CodeMassage.module.css';

export const CodeMassage = () => {

    return (
        <>
            <h2>Голосование</h2>
            <div className={style.codeMassage}>
                <h3>Необходимо ввести код</h3>
                <p>Код выдается каждому участнику голосования. Если вы не знаете, как получить код, то обратитесь в орг.
                    комитет голосования или в техническую поддержку</p>
            </div>
        </>
    );
}