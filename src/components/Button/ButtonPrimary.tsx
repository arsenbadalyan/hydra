import styles from './Button.module.css'
import { IBtnProps } from '../../interfaces/Button'

const ButtonPrimary = ({ w, h, title, classes, onClick }: IBtnProps) => {
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