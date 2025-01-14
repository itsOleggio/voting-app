import style from './Candidate.module.css';
import {useNavigate, useParams} from 'react-router-dom';
import candidatesData from "../../constant/candidates.json";
// @ts-expect-error
import {Header, Footer, CardPattern} from "../../components";
import {VoitingHeader} from "../Voting/VoitingComponents/VoitingHeader/VoitingHeader.tsx";
import no_photo from "../../constant/Photo_Candidates/no_photo.jpg";
import {CodeMassage} from "../Voting/VoitingComponents/CodeMassage/CodeMassage.tsx";
import {InputCodeField} from "../Voting/VoitingComponents/InputCodeField/InputCodeField.tsx";
import telegram_img from "../../assets/tg.png";
import vk_img from "../../assets/VK.png";
import gmail_img from "../../assets/Gmail.png";
import pdf_img from "../../assets/PDF.png";


export const Candidate = () => {

    const {candidateId} = useParams<{ candidateId: string }>();
    const navigate = useNavigate();

    const candidate = candidatesData.find(c => c.candidateId === Number(candidateId));


    if (!candidate) {
        return (
            <>
                <Header/>
                <div className={style.no_candedate}>
                    <h2>Кандидат не найден!</h2>
                    <button className={style.back_button} onClick={() => navigate(-1)}>Вернуться к списку кандидатов
                    </button>
                </div>
                <Footer/>
            </>
        );
    }

    return (
        <>
            <Header/>
            <VoitingHeader/>
            <div className={style.candidate_area}>
                <div className={style.name_and_but_area}>
                    <h1>{candidate.name}</h1>
                    <button className={style.back_button} onClick={() => navigate(-1)}>Вернуться к списку кандидатов
                    </button>
                </div>
                <div className={style.candidate_block}>
                    <div className={style.candidate_photo_area}>
                        <img
                            src={candidate.photo || no_photo}
                            alt={`${candidate.name}`}
                            className={style.candidate_photo}
                        />
                        <div className={style.constst}>
                            <span>Контакты</span>
                            <img src={vk_img} alt="" className={style.conststImg}/>
                            <img src={telegram_img} alt="" className={style.conststImg}/>
                            <img src={gmail_img} alt="" className={style.conststImg}/>
                        </div>
                        <div className={style.link_to_program}>
                            <span>Ссылка на программу</span>
                            <img src={pdf_img} alt="" className={style.conststImg}/>
                        </div>
                    </div>
                    <div className={style.candidate_info}>
                        <h3>Личная информация</h3>
                        <div className={style.candidate_text}>
                            <div>
                                <p>Возраст</p>
                                <div className={style.personal_info}>{candidate.age} лет</div>
                            </div>
                            <div>
                                <p>Город</p>
                                <div className={style.personal_info}>{candidate.city}</div>
                            </div>
                        </div>
                        <div className={style.candidate_description}>
                            <p>О кандидате</p>
                            <div className={style.personal_description}>{candidate.description}</div>
                        </div>
                    </div>

                </div>
            </div>

            <CodeMassage/>
            <InputCodeField/>
            <Footer/>
        </>
    );
}