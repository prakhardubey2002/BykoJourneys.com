import React from 'react'
import styles from "./style.module.css"
import ReviewComponent from '../ReviewComponent/ReviewComponent'
const Review = () => {
  const data = [
    {
      name: "Harshil Attri",
      ImgUrl: "https://lh3.googleusercontent.com/a-/ALV-UjXCsaOq8rMSH8FvOr-H9NlzW1fk9BK-zs9ZJzutNsV6tAM=w45-h45-p-rp-mo-br100",
      review: "This was my second trip with  Byko and I don't think it could have been anymore better. I had an amazing experience throughout the trip. All the credit goes to an extremely friendly trip leader Gaurav who made us mix up well with the other wonderful group members and made us feel comfortable until the end of the trip. Also, the accommodation, food, and transport facility they provided was all worth it. Hope to travel with them again soon to make some more beautiful memories.",
      ReadmoreLink: "https://maps.app.goo.gl/fiMLBNbFD3992Mq78"

    },
    {
      name: "Neha poddar",
      ImgUrl: "https://lh3.googleusercontent.com/a-/ALV-UjW4vGzD2QaQf6y1sNZ9jDGU3pHWADzCB_3S6T5M-nzn5iHI=w45-h45-p-rp-mo-ba2-br100",
      review: "Since starting from Chandigarh till coming back to Chandigarh. The management, the timings, the comfort of travel was too good. Team leader Nikhil managed everything so politely, carefully and with a lot patience and understanding towards each person. We really liked our stay, food, travelling and journey. We thought booking package would be uncomfortable and we will be in rush to go in flow with everyone. But, booking from byko vanished this perception. I would like to give 5/5 with bonus more points.",
      ReadmoreLink: "https://maps.app.goo.gl/o91Savg95WQwxBBa7"
    },
    {
      name: "Manju paswan",
      ImgUrl: "https://lh3.googleusercontent.com/a-/ALV-UjWIaCmEUKK6bM8xm9n4mtLhpX2vG1nXH0LAPuby-079BtQ=w45-h45-p-rp-mo-br100",
      review: "This was my first solo trip with Byko and I don't think it could have been anymore better. I had an amazing experience throughout the trip. All the credit goes to an extremely friendly trip leader Himanshu who made us mix up well with the other wonderful group members and made us feel comfortable until the end of the trip. Also, the accommodation, food, and transport facility they provided was all worth it. Hope to travel with them again soon to make some more beautiful memories",
      ReadmoreLink: "https://maps.app.goo.gl/ZTWwnqgMTPLm1K8k7"

    },
    {
      name: "Rashi Srivastav",
      ImgUrl: "https://lh3.googleusercontent.com/a-/ALV-UjUgpln8zyt1faBkw0d1oJJdcngnsJYRly_-dJDdRm8yDzQ=w45-h45-p-rp-mo-br100",
      review: "I recently travelled with book of trips and byko  to Udaipur and mount Abu. It was my first solo trip and at first I was skeptical and had lots of questions.. but it turned out to be the best experience of my life. As it’s said that firsts are always special so was my experience of solo trip. I made some really cool friends. The next day was my birthday and it was my best birthday ever. The weather, rain, beauty of Udaipur , visit to karni mata temple and later on pool party at the hotel, I couldn’t have expected more . They (Mahek , laksha and other travellers) even celebrated my birthday which was really sweet and I won’t ever forget that in my life.The stay at mount Abu was amazing we had a party all night and next day we saw sunrise which was the best part of the journey.Our trip captains , Laksha and Mahek were super friendly. Everything went smooth under their guidance. They cared for every traveller and made sure that no one is feeling left out. Would love to travel with them again.",
      ReadmoreLink: "https://maps.app.goo.gl/qkryeVZZtJgxZzJLA"

    }
  ]
  return (
    <div className={styles.Reviewmain}>
      <div className="top">
        <h2>
          Reviews From our <span> Travelers</span>
        </h2>
      </div>
      <div className={styles.bottom}>
        {
          data.map((review) => (
            <ReviewComponent data={review} />
          ))
        }
      </div>

    </div>
  )
}

export default Review