import { ReactElement } from "react";

import styles from "./QuestionAnswer.module.css";

import rightArrow from "../../assets/imgs/svg/right-arrow-long.svg"
import { IQuestionAnswer } from "../../interfaces/QuestionAnswer";

const QuestionAnswer = ({ answer, questionBottom, questionTop }: IQuestionAnswer): ReactElement => {
    return (
        <div className={styles.questionAnswerSection}>
            <div className={styles.questionAnswerSection_question}>
                <div className={styles.questionAnswerSection_question__title}>
                    <span>{ questionTop }</span>
                    <br />
                    <span>{ questionBottom }</span>
                </div>
                <div className={styles.questionAnswerSection_question__img}>
                    <img src={rightArrow} alt="right-arrow" />
                </div>
            </div>
            <div className={styles.questionAnswerSection_answer}>
                <p>{ answer }</p>
            </div>
        </div>
    );
};

export default QuestionAnswer;