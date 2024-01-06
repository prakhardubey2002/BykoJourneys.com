import React from 'react'
import styles from "./style.module.css"
import StarIcon from '@mui/icons-material/Star';
const ReviewComponent = ({ data }) => {
    return (
        <div className={styles.reviewcomponent} >
            <div className={styles.left} >
                <img src={data.ImgUrl} alt={data.name} />
                <div className={styles.topcontent} >
                    <div className={styles.text}>
                        <h2>{data.name}</h2>
                        <p>{data.Date}</p>
                    </div>
                        <div className={styles.star} >
                            <span> < StarIcon className={styles.staricon} /></span>
                            <span> < StarIcon className={styles.staricon} /></span>
                            <span> < StarIcon className={styles.staricon} /></span>
                            <span> < StarIcon className={styles.staricon} /></span>
                            <span> < StarIcon className={styles.staricon} /></span>

                        </div>
                    
                </div>
            </div>
            {/* <br /> */}
            <div className={styles.right} >

                <div className={styles.reviewContent} >
                    <span className={styles.textstart} >“</span>
                    <p className={styles.reviewtext} >
                        {data.review.substring(0, 200)}...
                        <a href={data.mobReadmoreLink} target="_blank" rel="noopener noreferrer">Read More</a>
                    </p>
                    <br />
                    <a href={data.ReadmoreLink} target="_blank" rel="noopener noreferrer">Read More</a>
                </div>

            </div>
        </div>


    )
}

export default ReviewComponent