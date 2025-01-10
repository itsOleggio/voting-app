import React from 'react';
import './App.css';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import {Header, Footer, CardPattern} from "./components";

const App: React.FC = () => {
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

export default App;
