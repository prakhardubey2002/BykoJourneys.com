import React from 'react'
import { useGlobalContext } from '../../context/AppContext';
import styles from './style.module.css';
import { Link } from 'react-router-dom';
import Thumbnailimg from '../Thumbnailimg/Thumbnailimg';
// import { motion } from 'framer-motion';
const Explorethumbnail = () => {
    const { navcontent } = useGlobalContext();
    const { data: apiData, isPending, } = navcontent;
    return (
        <div className={styles.landingpagethumbnailsection}>
            <div className={styles.top}>
                <h2>Explore Our <span> Trending</span> Destinations</h2>
            </div>
            <div className={styles.bottom}>
                {!isPending && apiData && Object.keys(apiData).map((category) => (

                    // apiData[category].slice(0, 2).map((categorydata) => (
                    apiData[category].map((categorydata) => (
                        <div>
                         
                                <Link to={`/destination/${categorydata.locationId}/${categorydata.name}`}>
                                    <Thumbnailimg img={categorydata.thumbnailUrl} />
                                </Link>
                            
                        </div>
                    ))

                ))
                }
            </div>
        </div>
    )
}

export default Explorethumbnail