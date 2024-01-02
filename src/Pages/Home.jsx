import React from 'react'
import Typewriter from 'typewriter-effect';
import SearchIcon from '@mui/icons-material/Search';
import Lottie from "lottie-react";
import GoogleLottie from '../animation/GoogleLottie.json'
import FacebookLottie from '../animation/FacebookLottie.json'
import ReviewLottie from '../animation/ReviewLottie.json'
import StarIcon from '@mui/icons-material/Star';
import TopValues from '../Components/TopValues/TopValues';
import Explorethumbnail from '../Components/Explorethumbnail/Explorethumbnail';
const Home = () => {
  return (
    <div>
      <div className="Home">
        <div className="Homehead">
          <h2>Reboot the magic of travel with</h2>
          <Typewriter
            className="hometypewritereffect"
            options={{
              strings: ['24*7 support', 'Hassle-free booking'],
              autoStart: true,
              loop: true,

            }}
          />
        </div>
        <div className="homesearch">
          <input type="text" placeholder='Search Destination' />
          <SearchIcon fontSize='large' className='searchicon' />
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
      <TopValues />
      <Explorethumbnail/>
    </div>
  )
}

export default Home