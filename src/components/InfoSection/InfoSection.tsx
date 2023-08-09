import { ReactElement } from "react";

import styles from './InfoSection.module.css';

// images
import imgVector1 from '../../assets/imgs/png/infoSectionVector1.png';
import imgVector2 from '../../assets/imgs/png/infoSectionVector2.png';
import imgVector3 from '../../assets/imgs/png/infoSectionVector3.png';
import infoSectionImg from '../../assets/imgs/png/pink-bg-vr.png'
import ButtonPrimary from "../Button/ButtonPrimary";
import rightArrow from '../../assets/imgs/png/arrow-small-right.png'

const InfoSection = (): ReactElement => {
    return (
        <div className={`${styles.infoSectionGeneral} ${styles.infoSection}`}>
            <div className={styles.infoSection_info}>
                <div className={styles.infoSection_info__title}>
                    <h1>Dive Into The Depths<br/>Of Virtual Reality</h1>
                </div>
                <div className={styles.infoSection_info__text}>
                    <p>
                        Embark on an immersive journey as we invite you to Dive Into The Depths of Virtual Reality. Uncover captivating worlds, limitless possibilities, and experiences that defy the boundaries of reality. Immerse yourself in a realm where imagination knows no bounds, and discover the extraordinary in the digital landscape. Are you ready to explore the uncharted realms of virtual reality? Let your adventure begin here.
                    </p>
                </div>
                <div className={styles.infoSection_info__action}>
                    <ButtonPrimary w={214} h={48} title="BUILD YOUR WORLD" onClick={() => {}} />
                    <img src={rightArrow} alt="right-arrow" />
                </div>
            </div>
            <div className={styles.infoSection_poster}>
                <div className={styles.infoSection_poster__vectors}>
                    <img src={imgVector1} alt="vector" />
                    <img src={imgVector2} alt="vector" />
                    <img src={imgVector3} alt="vector" />
                </div>
                <div className={styles.infoSection_poster__img}>
                    <img src={infoSectionImg} alt="info-section-image" />
                </div>
            </div>
        </div>
    );
};

export default InfoSection;