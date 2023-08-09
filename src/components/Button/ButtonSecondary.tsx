import { ReactElement } from "react";
import { IBtnProps } from "../../interfaces/Button";

import styles from './Button.module.css'

const ButtonSecondary = ({ w, h, title, onClick, classes }: IBtnProps): ReactElement => {
    
    return (
        <>
            <button
                style={{ width: `${w}px`, height: `${h}px` }}
                className={`${styles.btn} ${styles.secondaryBtn} ${classes}`}
                title={title}
                onClick={onClick}>
                    {title}
            </button>
        </>
    );
};

export default ButtonSecondary;