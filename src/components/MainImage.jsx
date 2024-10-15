/* eslint-disable react/prop-types */
import Styles from './MainImage.module.css';

export const MainImage = () => {
    return (
        <div className={Styles.mainContainer}>
            <div className={Styles.imageContainer}>
                <img src="/caro.jpg" alt="Quinceañera" className={Styles.mainImage} />
            </div>
            <div className={Styles.textContainer}>
                <h2 className={Styles.eventTitle}>¡Estás Invitado!</h2>
                <p className={Styles.invitationText}>
                    Nos encantaría que seas parte de este momento tan especial para nosotros, ¡falta poco!
                </p>
            </div>
        </div>
    );
};
