// @ts-ignore
import {Header, Footer, CardPattern, NoVoiting} from "../../components";
import votesData from '../../constant/Votes/votes.json';
import style from './Home.module.css';


export const Home = () => {
    return (
        <>
            <Header/>
            <main className={style.main_area}>
                <div className={style.main_first_line}>
                    <h1>Голосования</h1>
                    <button>Ввести код</button>
                </div>
                <div className="cardsArea">
                    {votesData.length === 0 ? (
                        <NoVoiting/>
                    ) : (
                        votesData.map((vote) => (
                            <CardPattern key={vote.voteId} vote={vote}/>
                        ))
                    )}
                </div>


            </main>
            <Footer/>
        </>
    );
};