import { ReactElement } from "react";

import styles from "./ContactInfoBar.module.css";

import infoBarData from "./ContactInfoBarData";

const ContactInfoBar = (): ReactElement => {
    
    return (
        <div className={styles.contactInfoBar}>
            {infoBarData.map(item => (
                <div className={styles.contactInfoBar_item}>
                    <div className={styles.contactInfoBar_item__icon}>
                        <img src={item.icon} alt={item.title} />
                    </div>
                    <div className={styles.contactInfoBar_item__info}>
                        <span>{ item.title }</span>
                        <br />
                        <span>{ item.text }</span>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ContactInfoBar;