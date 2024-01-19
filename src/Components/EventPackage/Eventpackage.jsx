import React from 'react'
import styles from "./style.module.css"
import BrowseGalleryIcon from '@mui/icons-material/BrowseGallery';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import DateRangeIcon from '@mui/icons-material/DateRange';
import Demo from "./demo.jpg"
const Eventpackage = () => {
    return (
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

                <div className={styles.card} >
                    <div className={styles.up}>
                        <img src={Demo} alt="" />
                    </div>
                    <div className={styles.down} >
                        <h4>7 Days Bhutan Road Trip Package</h4>
                        <br />
                        <div className={styles.detail}>
                            <div className={styles.duration} >
                                <BrowseGalleryIcon />
                                <span>
                                    6N/7D
                                </span>

                            </div>
                            <div className={styles.location} >
                                <LocationOnIcon />
                                <span>
                                    Siliguri
                                </span>

                            </div>
                        </div>
                        <div className={styles.dates}>
                            <DateRangeIcon />
                            <span>
                                20 Jan,26 Jan,3 Feb
                            </span>
                        </div>
                    </div>
                </div>
                <div className={styles.card} >
                    <div className={styles.up}>
                        <img src={Demo} alt="" />
                    </div>
                    <div className={styles.down} >
                        <h4>7 Days Bhutan Road Trip Package</h4>
                        <br />
                        <div className={styles.detail}>
                            <div className={styles.duration} >
                                <BrowseGalleryIcon />
                                <span>
                                    6N/7D
                                </span>

                            </div>
                            <div className={styles.location} >
                                <LocationOnIcon />
                                <span>
                                    Siliguri
                                </span>

                            </div>
                        </div>
                        <div className={styles.dates}>
                            <DateRangeIcon />
                            <span>
                                20 Jan,26 Jan,3 Feb
                            </span>
                        </div>
                    </div>
                </div>
                <div className={styles.card} >
                    <div className={styles.up}>
                        <img src={Demo} alt="" />
                    </div>
                    <div className={styles.down} >
                        <h4>7 Days Bhutan Road Trip Package</h4>
                        <br />
                        <div className={styles.detail}>
                            <div className={styles.duration} >
                                <BrowseGalleryIcon />
                                <span>
                                    6N/7D
                                </span>

                            </div>
                            <div className={styles.location} >
                                <LocationOnIcon />
                                <span>
                                    Siliguri
                                </span>

                            </div>
                        </div>
                        <div className={styles.dates}>
                            <DateRangeIcon />
                            <span>
                                20 Jan,26 Jan,3 Feb
                            </span>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Eventpackage