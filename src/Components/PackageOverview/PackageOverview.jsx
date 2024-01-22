import React, { useState } from 'react'
import styles from "./style.module.css"
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import WhereToVoteIcon from '@mui/icons-material/WhereToVote';
import About from './options/About'
import Dates from './options/Dates'
import Otherinfo from './options/Otherinfo'
import Itinerary from './options/Itineraryoption'
import Demo from "./demo.jpg"
import PackageTestimonials from '../PackageTestimonials/PackageTestimonials';
const PackageOverview = () => {
    const [option, setOption] = useState("about");
    function change(optionx) {
        setOption(optionx);
        if (option === optionx) {
            setOption("about")
        }
    }
    return (
        <div className={styles.PackageOverview} >
            <div className={styles.Packagemain} >

                <div className={styles.left}>
                    <div className={styles.top}>
                        <h2>
                            Overview
                        </h2>
                    </div>
                    <br />
                    <div className={styles.iconsection}>
                        <div className={styles.data}>
                            <div className={styles.content} >
                                <AccessTimeIcon className={styles.icon} />
                                <div className={styles.Text} >
                                    <p>Duration</p>
                                    <h4>6N-&D</h4>
                                </div>
                            </div>

                            <div className={styles.content} >
                                <LocationOnIcon className={styles.icon} />
                                <div className={styles.Text} >
                                    <p>Pick-up Location</p>
                                    <h4>Leh</h4>
                                </div>
                            </div>
                        </div>
                        <br />
                        <div className={styles.data}>
                            <div className={styles.content} >
                                <CurrencyRupeeIcon className={styles.icon} />
                                <div className={styles.Text} >
                                    <p>Starting Price</p>
                                    <h4>₹27,999/-</h4>
                                </div>
                            </div>
                            <div className={styles.content} >
                                <WhereToVoteIcon className={styles.icon} />
                                <div className={styles.Text} >
                                    <p>Drop of Location</p>
                                    <h4>Leh</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.tabs} >

                        <button onClick={() => change("about")} >
                            About
                        </button>
                        <button onClick={() => change("itineary")} >
                            Itineary
                        </button>
                        <button onClick={() => change("dates")} >
                            Dates & Costing
                        </button>
                        <button onClick={() => change("otherinfo")} >
                            Other Info
                        </button>
                    </div>
                    <div className={styles.PackageContent} >
                        <div>
                            {
                                option === "about" && <About />
                            }
                            {
                                option === "itineary" && <Itinerary />
                            }
                            {
                                option === "dates" && <Dates />
                            }
                            {
                                option === "otherinfo" && <Otherinfo />
                            }
                        </div>
                    </div>
                    <br />
                    <h2>Video</h2>
                    <div className={styles.videosection} >
                        <iframe
                            className={styles.video}
                            title="leh0"
                            width="100%"
                            height="100%"
                            src="https://www.youtube.com/embed/F6BZKoJtS6Q?si=Dmo3brlKxCQ92uHV"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowfullscreen
                        ></iframe>
                        <iframe
                            className={styles.video}
                            title="leh0"
                            width="100%"
                            height="100%"
                            src="https://www.youtube.com/embed/F6BZKoJtS6Q?si=Dmo3brlKxCQ92uHV"
                            allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowfullscreen
                        ></iframe>
                    </div>
                    <div className={styles.photosection} >
                        <h2>Photos</h2>
                        <br />
                        <div className={styles.imagecontainer}>
                            <img className={styles.images} src={Demo} alt="TravelImages" />
                            <img className={styles.images} src={Demo} alt="TravelImages" />
                            <img className={styles.images} src={Demo} alt="TravelImages" />
                            <img className={styles.images} src={Demo} alt="TravelImages" />
                        </div>
                    </div>
                    <PackageTestimonials/>
                </div>
                <div className={styles.right} >
                    <div className={styles.top} >

                        <h4>Trips so perfect that Travelers want you to know more about their experiences!
                        </h4>
                        <iframe
                            className={styles.video}
                            title="leh0"
                            width="100%"
                            height="100%"
                            src="https://www.youtube.com/embed/F6BZKoJtS6Q?si=Dmo3brlKxCQ92uHV"
                            allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowfullscreen
                        ></iframe>
                    </div>
                    <div className={styles.bottom} >
                        <h2>
                            Get In touch
                        </h2>
                        <div className={styles.input}>
                        <label >First Name</label>
                        <input type="text" />
                        </div>
                        <div className={styles.input}>
                        <label >List Name</label>
                        <input type="text" />
                        </div>
                        <div className={styles.input}>
                        <label >Email</label>
                        <input type="email" />
                        </div>
                        <div className={styles.input}>
                        <label >Preferred Destination</label>
                        <input type="text" />
                        </div>
                        <br />
                       <button>Submit</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PackageOverview