import React from 'react';
import styles from './style.module.css';
import { Link } from 'react-router-dom';
import CallIcon from '@mui/icons-material/Call';
import MailIcon from '@mui/icons-material/Mail';
import logo from './logo.webp';

const UpperTab = () => {
  return (
    <>
      <div className={styles.uppertab}>
        <div className={styles.uppertableft}>
          <Link to="/" >
          <img src={logo} alt="Logo" />
          </Link>
        </div>
        <div className={styles.uppertabright}>
          <ul>
            <li className={styles.animated} >
              <a href="tel:+91-7307309609">
                <CallIcon /> <p>
                  +91-7307309609
                </p>
              </a>
            </li>
            <li className={styles.animated} >
              <a href="mailto:info@bykojourneys.com">
                <MailIcon /> <p>
                  info@bykojourneys.com
                </p>
              </a>
            </li>
            <li className={styles.animated} >
              <Link to="/about">About us</Link>
            </li>
            <li className={styles.animated} >
              <Link to="/blog">Blog</Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default UpperTab;
