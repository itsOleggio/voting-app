import {Header} from "../../components/Header/Header.tsx";
import {Footer} from "../../components/Footer/Footer.tsx";
import {CardPattern} from "../../components/Cards/CardPattern.tsx";

export const Home = () => {
    return (
        <>
            <Header></Header>
            <main>
                <div className="main_first_line">
                    <h1>Голосования</h1>
                    <button>Ввести код</button>
                </div>
                <div className="cardsArea">
                    <CardPattern></CardPattern>
                </div>

            </main>
            <Footer></Footer>
        </>
    );
};