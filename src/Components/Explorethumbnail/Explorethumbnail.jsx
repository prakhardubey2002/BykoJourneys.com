import React from 'react'
import { useGlobalContext } from '../../context/AppContext';
import styles from './style.module.css';
import { Link } from 'react-router-dom';
const Explorethumbnail = () => {
    const { navcontent, setNavcontent } = useGlobalContext();
    const { data: apiData, isPending, error } = navcontent;
  return (
    <div className={styles.landingpagethumbnailsection}>
        <div className="top">
            <h2>Explore Our Trending Destinations</h2>
        </div>
        <div className="bottom">
           
        </div>
    </div>
  )
}

export default Explorethumbnail