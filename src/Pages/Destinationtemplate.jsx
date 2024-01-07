import React from 'react'
import { useParams } from 'react-router-dom';
import Lottie from "lottie-react";
import GoogleLottie from '../animation/GoogleLottie.json'
import FacebookLottie from '../animation/FacebookLottie.json'
import ReviewLottie from '../animation/ReviewLottie.json'
import StarIcon from '@mui/icons-material/Star';
import DestinationAbout from '../Components/DestinationAbout/DestinationAbout';
import LandingPageTrip from '../Components/LandingPageTrip/LandingPageTrip';
import Faq from '../Components/FAQ/Faq';
import Review from "../Components/Reviewsection/Review"
const Destinationtemplate = () => {
  const { id, name } = useParams();
  return (
    <div className="destinationmain">
      <div className="topimgsection">
        <img className="topbackgroundimage" src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt={name} />
        <div className="overlay">

        </div>
        <div className="text">
          <h2>{name}</h2>
          <h4>Discover The Land Of Happiness, Peace And Serenity</h4>
        </div>
        <div className="homereview">
          <div className="review">
            <Lottie className='homeanime' animationData={GoogleLottie} loop={true} />
            <h3>Google review</h3>
            <h4> <StarIcon className='star' />4.8</h4>
          </div>
          <div className="review">
            <Lottie className='homeanime' animationData={FacebookLottie} loop={true} />
            <h3>Facebook Reviews</h3>
            <h4>  <StarIcon className='star' /> 4.5</h4>
          </div>
          <div className="review">
            <Lottie className='homeanime' animationData={ReviewLottie} loop={true} />
            <h3>Trip Advisor Reviews</h3>
            <h4>  <StarIcon className='star' /> 4.7</h4>
          </div>
        </div>
      </div>
      <div className="destinationaboutsection">
        <DestinationAbout name={name} />
        <LandingPageTrip />
        <Review/>
        <Faq />

      </div>
    </div>
  )
}

export default Destinationtemplate