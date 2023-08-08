import styles from './Header.module.css';
import logo from '../../assets/imgs/svg/logo.svg';
import logoText from '../../assets/imgs/svg/logo_text.svg';
import { useMemo } from 'react';
import ButtonPrimary from '../Button/ButtonPrimary';

const Header = () => {
    const menuItems = useMemo(() => [
        "About",
        "Services",
        "Technologies",
        "How to"
    ], []);

    return (
        <div className={styles.header}>
            <div className={styles.headerInner}>
                <div className={styles.headerLogo}>
                    <img src={logo} alt="logo" />
                    <img src={logoText} alt="logo-text" />
                </div>
                <div className={styles.headerMenu}>
                    <ul>
                        {menuItems.map(((menuItem, key) => (
                            <li key={key}>{menuItem}</li>
                        )))}
                    </ul>
                </div>
                <div className={styles.headerButtons}>
                    <ButtonPrimary w={155} h={48} title="JOIN HYDRA" onClick={() => {}} />
                </div>
            </div>
        </div>
    )
};

export default Header;