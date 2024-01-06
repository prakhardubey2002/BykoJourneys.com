import React from 'react'
import styles from "./style.module.css"
const Faq = () => {
    return (
        <div className={styles.accordion}>
            <h1>Frequently <span> Asked Questions</span></h1>
            <div className={styles['accordion-item']}>
                <input type="checkbox" id="accordion1" />
                <label htmlFor="accordion1" className={styles['accordion-item-title']}>
                    <span className={styles.icon}></span>
                    Why Bykojourneys?
                </label>
                <div className={styles['accordion-item-desc']}>
                    Byko Journeys stands out as a premier travel provider for several compelling reasons, each rooted in our core values.

                    First and foremost, we take pride in managing all trips end-to-end with our dedicated in-house operations team. This commitment ensures that there are no third-party involvements, guaranteeing transparency and dismissing any uncertainties associated with fishy claims. When we say your travel plan is 100% our responsibility, it's a promise we wholeheartedly mean.
                </div>
            </div>

            <div className={styles['accordion-item']}>
                <input type="checkbox" id="accordion2" />
                <label htmlFor="accordion2" className={styles['accordion-item-title']}>
                    <span className={styles.icon}></span>
                    Is experience hassle free with BykoJourney?
                </label>
                <div className={styles['accordion-item-desc']}>
                    Absolutely, at Byko Journeys, we pride ourselves on providing a hassle-free travel experience for all our customers. Our dedicated in-house operations team takes care of every detail, ensuring that your journey is smooth, enjoyable, and worry-free.
                    From the moment you plan your trip to the time you return, we go the extra mile to make your experience seamless. Our commitment to managing trips without third-party involvement means there are no hidden surprises or uncertainties. We take full responsibility for your travel plan, allowing you to relax and enjoy your adventure.
                </div>
            </div>
            <div className={styles['accordion-item']}>
                <input type="checkbox" id="accordion1" />
                <label htmlFor="accordion1" className={styles['accordion-item-title']}>
                    <span className={styles.icon}></span>
                    Why Bykojourneys?
                </label>
                <div className={styles['accordion-item-desc']}>
                    Byko Journeys stands out as a premier travel provider for several compelling reasons, each rooted in our core values.

                    First and foremost, we take pride in managing all trips end-to-end with our dedicated in-house operations team. This commitment ensures that there are no third-party involvements, guaranteeing transparency and dismissing any uncertainties associated with fishy claims. When we say your travel plan is 100% our responsibility, it's a promise we wholeheartedly mean.
                </div>
            </div>

            <div className={styles['accordion-item']}>
                <input type="checkbox" id="accordion2" />
                <label htmlFor="accordion2" className={styles['accordion-item-title']}>
                    <span className={styles.icon}></span>
                    Is experience hassle free with BykoJourney?
                </label>
                <div className={styles['accordion-item-desc']}>
                    Absolutely, at Byko Journeys, we pride ourselves on providing a hassle-free travel experience for all our customers. Our dedicated in-house operations team takes care of every detail, ensuring that your journey is smooth, enjoyable, and worry-free.
                    From the moment you plan your trip to the time you return, we go the extra mile to make your experience seamless. Our commitment to managing trips without third-party involvement means there are no hidden surprises or uncertainties. We take full responsibility for your travel plan, allowing you to relax and enjoy your adventure.
                </div>
            </div>
        </div>
    )
}

export default Faq