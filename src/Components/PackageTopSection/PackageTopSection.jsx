import React from 'react'
import styles from "./style.module.css"
const PackageTopSection = ({ name }) => {
    return (

        <div className={styles.Packagetopimgsection}>
            <img className={styles.Packagetopbackgroundimage} src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt={name} />
            <div className={styles.Packageoverlay}>
            </div>
            <div className={styles.PackageText} >
                <p>
                    Explore The Untamed Beauty, Coupled With Unparalleled Adventure
                </p>
                <h2>
                    7 Days Leh Ladakh Tour Package With Turtuk Village
                </h2>

            </div>
            <div className={styles.tabs} >
                <button>
                    <a href="https://www.bykojourneys.com/" target='_blank' >

                        Get Itineary
                    </a>
                </button>
                <button>
                    <a href="https://www.bykojourneys.com/" target='_blank'>
                        Book Now
                    </a>
                </button>
            </div>
        </div>

    )
}

export default PackageTopSection