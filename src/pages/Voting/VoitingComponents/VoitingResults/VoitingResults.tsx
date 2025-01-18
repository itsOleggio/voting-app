import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import style from './VoitingResults.module.css'

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

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

type VoteStatus = {
    startTime: string;
    endTime: string;
    status: string;
};

interface VoitingResultsProps {
    votes: Vote[];
    candidates: Candidate[];
    voteStatus: VoteStatus;
}

export const VoitingResults: React.FC<VoitingResultsProps> = ({ votes, candidates, voteStatus }) => {

    const candidateNames = candidates.map(candidate => candidate.name);
    const votesCount = candidates.map(candidate =>
        votes.filter(vote => vote.candidateId === candidate.id).reduce((acc, vote) => acc + vote.count, 0)
    );

    const data = {
        labels: candidateNames,
        datasets: [
            {
                label: 'Голоса за кандидатов',
                data: votesCount,
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1,
            },
        ],
    };

    // Настройки для диаграммы
    const options = {
        responsive: true,
        plugins: {
            title: {
                display: true,
                text: 'Результаты голосования',
            },
        },
        scales: {
            x: {
                title: {
                    display: true,
                    text: 'Кандидаты',
                },
            },
            y: {
                title: {
                    display: true,
                    text: 'Количество голосов',
                },
                beginAtZero: true,
            },
        },
    };

    // Функция для подсчета оставшегося времени
    // @ts-ignore
    const getRemainingTime = () => {
        if (voteStatus.status === 'Завершено') {
            return 'Голосование завершено';
        }

        const currentTime = new Date().getTime();
        const endTime = new Date(voteStatus.endTime).getTime();
        const timeLeft = endTime - currentTime;

        if (timeLeft <= 0) {
            return 'Голосование завершено';
        }

        const minutesLeft = Math.floor(timeLeft / (1000 * 60));
        return `${minutesLeft} минут до завершения голосования`;
    };

    return (
        <>
            <h2>Итоги голосования</h2>
            <div className={style.block_result}>
                <div className={style.br_left}>
                    <span>Всего голосов: </span>
                    <span>Вовлеченность: </span>
                    {candidates.map((candidate) => {
                        const candidateVotes = votesCount[candidates.findIndex(c => c.id === candidate.id)];
                        return (
                            <span key={candidate.id}>{candidate.name}: {candidateVotes} голосов</span>
                        );
                    })}
                    {/*<span>{getRemainingTime()}</span>*/}
                </div>
                <div className={style.br_right}>
                <Bar data={data} options={options} />
                </div>
            </div>
        </>
    );
};
