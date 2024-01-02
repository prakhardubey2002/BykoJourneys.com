import React from 'react'
import Lottie from "lottie-react";
import GlobeLottie from "./animation/GlobeLottie.json"
import TravelLottie from "./animation/TravelLottie.json"
import TicketLottie from "./animation/TicketLottie.json"
import styles from "./style.module.css"
const TopValues = () => {
    return (
        <div className={styles.TopValues}>
            <div className={styles.left}>
                <h2>
                    Top <span> Values</span>  For You
                </h2>
                <p>Try a variety of benefits when using our services.</p>
            </div>
            <div className={styles.right}>
                <div className={styles.values}>
                    <Lottie className={styles.valueanime} animationData={GlobeLottie} loop={true} />
                    <div className="valuetext">
                        <h3>Lot of Choices</h3>
                        <p>Total 100+ destinations that we work with</p>
                    </div>
                </div>
            </div>
            <div className={styles.right}>
                <div className={styles.values}>
                    <Lottie className={styles.valueanime} animationData={TravelLottie} loop={true} />
                    <div className="valuetext">
                        <h3>Best Tour Guide</h3>
                        <p>Our tour guide with 2+ years of experience</p>
                    </div>
                </div>
            </div>
            <div className={styles.right}>
                <div className={styles.values}>
                    <Lottie className={styles.valueanime} animationData={TicketLottie} loop={true} />
                    <div className="valuetext">
                        <h3>Easy Booking</h3>
                        <p>With an easy and fast ticket purchase process</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TopValues