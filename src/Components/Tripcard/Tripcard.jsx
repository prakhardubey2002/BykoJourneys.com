import React from 'react'
import styles from "./style.module.css"
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import DateRangeIcon from '@mui/icons-material/DateRange';
import { Link } from 'react-router-dom';
const Tripcard = ({ data }) => {
    return (
        <div className={styles.tripcard} >
            <div className={styles.top}>
                <p className={styles.cardprice}>  &#x20b9; {data.overview.startingPrice.value}/-only</p>
                <div className={styles.bannerimageparent} >
                    <img className={styles.bannertripimg} src="https://picsum.photos/300/200" alt="" />
                </div>
            </div>
            <div className={styles.bottom}>
                <h2>{data.packageDetails.title}</h2>
                <div className={styles.tripdetails}>
                    <div className={styles.tripdetailcontent}>
                        <AccessTimeIcon className={styles.tripdetailicon} />
                        <div className={styles.text}>
                            <p>Duration</p>
                            <h4>{data.overview.durations}</h4>
                        </div>
                    </div>
                    <div className={styles.tripdetailcontent}>
                        <LocationOnIcon className={styles.tripdetailicon} />
                        <div className={styles.text}>
                            <p>Location</p>
                            <h4>{data.packageDetails.location}</h4>
                        </div>
                    </div>
                    <div className={styles.tripdetailcontent}>
                        <DateRangeIcon className={styles.tripdetailicon} />
                        <div className={styles.text}>
                            <p>Starting from</p>
                            <h4>{data.content.dates[0].dates[0]}</h4>
                        </div>
                    </div>


                </div>

            </div>
            <br />
            <Link to={`/package/${data.packageDetails.title}/${data._id}`}>

                    View Details
                
            </Link>
        </div>
    )
}

export default Tripcard