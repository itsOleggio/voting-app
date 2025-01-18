import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// @ts-expect-error
import {Home, Voting, NoFound, Candidate, Admin} from './pages';
// @ts-ignore
import {AdminVotes, AdminCandidates, AdminRequest, AdminVotePage, AdminAddVote} from "./pages/Admin/AdminPages/";


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
                <Route path="/admin/votes" element={<AdminVotes />} />
                <Route path="/admin/candidates" element={<AdminCandidates />} />
                <Route path="/admin/requests" element={<AdminRequest />} />
                <Route path="/admin/vote/:voteId" element={<AdminVotePage />} />
                <Route path="/admin/vote/add" element={<AdminAddVote />} />
            </Routes>
        </Router>
    );
};

export default App;
