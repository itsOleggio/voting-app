import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// @ts-expect-error
import { Home, Voting, NoFound } from './pages';

const App: React.FC = () => {
    return (
        <Router>
            <Routes>
                <Route path="*" element={<NoFound />} />
                <Route index element={<Home />} />
                <Route path="/" element={<Home />} />
                <Route path="/voting" element={<Voting />} />
            </Routes>
        </Router>
    );
};

export default App;
