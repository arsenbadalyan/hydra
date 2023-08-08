import styles from './Button.module.css'
import { BtnProps } from '../../interfaces/Button'

const ButtonPrimary = ({ w, h, title, classes, onClick }: BtnProps) => {
    return (
        <>
            <button
                style={{ width: `${w}px`, height: `${h}px` }}
                className={`${styles.btn} ${styles.primaryBtn} ${classes}`}
                title={title}
                onClick={onClick}>
                    {title}
            </button>
        </>
    );
};

export default ButtonPrimary;