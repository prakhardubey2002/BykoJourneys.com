import React from 'react'
import styles from "./style.module.css"
import Demo from "./demo.jpg"
import StarIcon from '@mui/icons-material/Star';
const PackageTestimonials = () => {
    return (
        <div className={styles.Testimonialsmain} >
            <h2>Reviews</h2>
            <div className={styles.reviewcontainer}>

                <div className={styles.card}>
                    <div className={styles.topimg} >
                        <div className={styles.imgcover} >
                        <img src={Demo} alt="Review" />
                        </div>
                    </div>
                    <div className={styles.text}>
                        <div className={styles.star}>
                            <StarIcon />
                            <StarIcon />
                            <StarIcon />
                            <StarIcon />
                            <StarIcon />
                        </div>
                        <h2>Ryan Rex</h2>
                        {/* <br /> */}
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias, iure accusantium. Non, architecto quo! Provident soluta quis sunt, animi nobis unde atque saepe nam.</p>
                    </div>
                </div>
                <div className={styles.card}>
                    <div className={styles.topimg} >
                        <div className={styles.imgcover} >
                        <img src={Demo} alt="Review" />
                        </div>
                    </div>
                    <div className={styles.text}>
                        <div className={styles.star}>
                            <StarIcon />
                            <StarIcon />
                            <StarIcon />
                            <StarIcon />
                            <StarIcon />
                        </div>
                        <h2>Ryan Rex</h2>
                        {/* <br /> */}
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias, iure accusantium. Non, architecto quo! Provident soluta quis sunt, animi nobis unde atque saepe nam.</p>
                    </div>
                </div>
                <div className={styles.card}>
                    <div className={styles.topimg} >
                        <div className={styles.imgcover} >
                        <img src={Demo} alt="Review" />
                        </div>
                    </div>
                    <div className={styles.text}>
                        <div className={styles.star}>
                            <StarIcon />
                            <StarIcon />
                            <StarIcon />
                            <StarIcon />
                            <StarIcon />
                        </div>
                        <h2>Ryan Rex</h2>
                        {/* <br /> */}
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias, iure accusantium. Non, architecto quo! Provident soluta quis sunt, animi nobis unde atque saepe nam.</p>
                    </div>
                </div>
                
             
            </div>
        </div>
    )
}

export default PackageTestimonials