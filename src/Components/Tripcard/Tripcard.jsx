import React from 'react'
import styles from "./style.module.css"
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import DateRangeIcon from '@mui/icons-material/DateRange';
const Tripcard = () => {
    return (
        <div className={styles.tripcard} >
            <div className={styles.top}>
                <p className={styles.cardprice}>  &#x20b9; 21000/-only</p>
                <div className={styles.bannerimageparent} >
                    <img className={styles.bannertripimg} src="https://picsum.photos/300/200" alt="" />
                </div>
            </div>
            <div className={styles.bottom}>
                <h2>Kashmir Winter Expedition</h2>
                <div className={styles.tripdetails}>
                    <div className={styles.tripdetailcontent}>
                        <AccessTimeIcon className={styles.tripdetailicon} />
                        <div className={styles.text}>
                            <p>Duration</p>
                            <h4>7 Days</h4>
                        </div>
                    </div>
                    <div className={styles.tripdetailcontent}>
                        <LocationOnIcon className={styles.tripdetailicon} />
                        <div className={styles.text}>
                            <p>Location</p>
                            <h4>Kashmir</h4>
                        </div>
                    </div>
                    <div className={styles.tripdetailcontent}>
                        <DateRangeIcon className={styles.tripdetailicon} />
                        <div className={styles.text}>
                            <p>Starting from</p>
                            <h4>01 May 2023</h4>
                        </div>
                    </div>


                </div>

            </div>
            <br />
            <button>
                View Details
            </button>
        </div>
    )
}

export default Tripcard