import React from 'react'
import Typewriter from 'typewriter-effect';
import SearchIcon from '@mui/icons-material/Search';
import Lottie from "lottie-react";
import GoogleLottie from '../animation/GoogleLottie.json'
const Home = () => {
  return (
    <div className="Home">
      <div className="head">
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
        <SearchIcon/>
      </div>
      <div className="homereview">
          <div className="google">
          <Lottie className='homeanime'  animationData={GoogleLottie} loop={true} />
          <h4>50,000 Reviews</h4>
          </div>
          <div className="google">
          <Lottie className='homeanime'  animationData={GoogleLottie} loop={true} />
          <h4>50,000 Reviews</h4>
          </div>
          <div className="google">
          <Lottie className='homeanime'  animationData={GoogleLottie} loop={true} />
          <h4>50,000 Reviews</h4>
          </div>
      </div>
    </div>
  )
}

export default Home