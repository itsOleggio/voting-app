// @ts-ignore
import {Header, Footer, CardPattern, NoVoiting} from "../../components";
import votesData from '../../constant/Votes/votes.json';


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