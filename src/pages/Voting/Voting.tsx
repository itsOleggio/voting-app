// @ts-expect-error
import { Footer, Header } from '../../components';

export const Voting = () => {
    return (
        <>
            <Header />
            <main>
                <h1>Кандидаты</h1>
            </main>
            <Footer />
        </>
    );
};
