import jsPDF from 'jspdf'
import 'jspdf-autotable'
import RobotoFont from "../assets/Fonts/Roboto-Regular.ttf";

type Vote = {
    candidateId: number;
    count: number;
    status: string;
};

type Candidate = {
    id: number;
    name: string;
    party: string;
};

export const generatePDF = (
    votes: Vote[],
    _candidates: Candidate[],
    user: string,
    creationDate: string
) => {
    const doc = new jsPDF();

    doc.addFileToVFS("Roboto-Regular.ttf", RobotoFont);
    doc.addFont("Roboto-Regular.ttf", "Roboto", "normal");
    doc.setFont("Roboto");

    // Document Title
    doc.setFontSize(18);
    doc.text("Voting Report", 14, 22);

    // General Information
    doc.setFontSize(12);
    doc.text(`Date: ${creationDate}`, 14, 30);
    doc.text(`User: ${user}`, 14, 36);

    const totalVotes = votes.length;
    const activeVotes = votes.filter(vote => vote.status === "Активно").length;
    const notStartedVotes = votes.filter(vote => vote.status === "Не начато").length;
    const finishedVotes = votes.filter(vote => vote.status === "Завершено").length;

    // @ts-ignore
    const totalVoted = votes.reduce((acc, vote) => acc + vote.count, 0);
    const requestsCount = 0;

    doc.text(`Total Votes: ${totalVotes}`, 14, 46);
    doc.text(`Active Votes: ${activeVotes}`, 14, 52);
    doc.text(`Not Started Votes: ${notStartedVotes}`, 14, 58);
    doc.text(`Finished Votes: ${finishedVotes}`, 14, 64);
    // doc.text(`Total Voters: ${totalVoted}`, 14, 70);
    doc.text(`Total Voters: undefined`, 14, 70);
    doc.text(`Requests for Creation: ${requestsCount}`, 14, 76);

    // doc.autoTable({
    //     head: [["Vote ID", "Candidate ID", "Votes", "Status"]],
    //     body: votes.map(vote => [
    //         vote.candidateId,
    //         vote.count,
    //         vote.status,
    //     ]),
    //     startY: 86,
    // });
    //
    // doc.autoTable({
    //     head: [["Candidate ID", "Name", "Party"]],
    //     body: candidates.map(candidate => [
    //         candidate.id,
    //         candidate.name,
    //         candidate.party,
    //     ]),
    //     startY: doc.lastAutoTable.finalY + 10,
    // });

    // Save the PDF
    doc.save("report.pdf");
};
