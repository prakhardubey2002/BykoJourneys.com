import React, { useEffect } from 'react'
import styles from "./style.module.css"
import BrowseGalleryIcon from '@mui/icons-material/BrowseGallery';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import DateRangeIcon from '@mui/icons-material/DateRange';
import Demo from "./demo.jpg"
import { useGlobalContext } from '../../context/AppContext';
import { Link } from 'react-router-dom';
const Eventpackage = () => {
    const { packagecontent } = useGlobalContext();
    useEffect(() => {

        console.log(packagecontent?.pdata);

    }, [])
    return (
        <div className={styles.eventmaincontainer}>

            <div className={styles.Eventmain} >
                <div className={styles.top}>
                    <h2>
                        Featured <span>Packages</span>
                    </h2>
                    <br />
                    <p>
                        Bhutan Tour Packages: Been in the news all over the years for being the first country to measure Happiness Index over their GDP, Bhutan is one of the most unique countries in the world.
                    </p>
                </div>

                <div className={styles.bottom} >
                    {

                        !packagecontent.load &&
                        packagecontent.pdata.map((data) => (
                            <Link to={`/package/${data.packageDetails.location}/${data.packageDetails.locationId}`}>

                                <div className={styles.card} >
                                    <div className={styles.up}>
                                        {/* <img src={data.media.images.thumbnailURL} alt="" /> */}
                                        <img src={Demo} alt="" />
                                    </div>
                                    <div className={styles.down} >
                                        <h4>{data.packageDetails.title}</h4>
                                        <br />
                                        <div className={styles.detail}>
                                            <div className={styles.duration} >
                                                <BrowseGalleryIcon className={styles.icon} />
                                                <span>
                                                    {data.overview.durations}
                                                </span>

                                            </div>
                                            <div className={styles.location} >
                                                <LocationOnIcon className={styles.icon} />
                                                <span>
                                                    {data.packageDetails.location}
                                                </span>

                                            </div>
                                        </div>
                                        <div className={styles.dates}>
                                            <DateRangeIcon className={styles.icon} />
                                            <span>
                                                20 Jan,26 Jan,3 Feb
                                            </span>
                                        </div>
                                        <br />
                                        <button>
                                            View Detail
                                        </button>
                                    </div>
                                </div>
                            </Link>
                        ))
                    }



                </div>
            </div>
        </div>
    )
}

export default Eventpackage