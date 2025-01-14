import {Header} from "../../components/Header/Header.tsx";
import {Footer} from "../../components/Footer/Footer.tsx";
import {CardPattern} from "../../components/Cards/CardPattern.tsx";
import votesData from '../../constant/votes.json';


export const Home = () => {
    return (
        <>
            <Header/>
            <main>
                <div className="main_first_line">
                    <h1>Голосования</h1>
                    <button>Ввести код</button>
                </div>
                <div className="cardsArea">
                    {votesData.map((vote) => (
                        <CardPattern
                            key={vote.voteId}
                            vote={vote}
                        />
                    ))}
                </div>

            </main>
            <Footer/>
        </>
    );
};