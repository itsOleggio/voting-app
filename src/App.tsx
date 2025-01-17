import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// @ts-expect-error
import {Home, Voting, NoFound, Candidate, Admin} from './pages';

const App: React.FC = () => {
    return (
        <Router>
            <Routes>
                <Route path="*" element={<NoFound />} />
                <Route index element={<Home />} />
                <Route path="/" element={<Home />} />
                <Route path="/voting/:voteId" element={<Voting />} />
                <Route path="/voting/:voteId/candidate/:candidateId" element={<Candidate />} />
                <Route path='/admin' element={<Admin />} />
            </Routes>
        </Router>
    );
};

export default App;
