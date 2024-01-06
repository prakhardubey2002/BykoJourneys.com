import React from 'react'
import styles from "./style.module.css"
const ReviewComponent = ({ data }) => {
    return (
        <div style={styles.reviewcomponent} >
            <div>ReviewComponent : {data.name} </div>
        </div>


    )
}

export default ReviewComponent