import React from 'react'
import styles from './style.module.css';
const Thumbnailimg = ({img}) => {
  return (
    <div className={styles.thumbimgbox} >
        <img className={styles.thumbimg} src={img} alt="" />
    </div>
  )
}

export default Thumbnailimg