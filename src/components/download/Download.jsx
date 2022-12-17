import React from 'react'
import './download.css'
import Button from '../UI/button/Button'
import { BsApple } from 'react-icons/bs'
import googlePlay from '../../assets/google-play.png'
import frame from '../../assets/main3.png'
import screen from '../../assets/iPhone_12_Pro_ Mockup_label.png'

const Download = () => {
  return (
    <section className='download-section'>
      <div className="download-wrap container">
        <div className="text-area">
          <h1>Get Our <span>Mobile App</span> & Make Your Financial Journey More <span>Easy</span></h1>
          <p>Save more and farther with our easy to use, secure mobile app. No matter where you are, we're letting you manage your finances on-the-go. </p>
          <div className="btns">
            <Button icon={<img src={googlePlay} alt='google play' />} text={"Get on Android"} btnClass={"btn-primary"} href={"#google"} />
            <Button icon={<BsApple />} text={"Get on iPhone"} btnClass={"btn-outline-dark"} href={"#apple"} />
          </div>
        </div>

        <div className="img-area">
          <div className="phone-mockup">
            <div className="frame"><img src={frame} alt="frame" /></div>
            <div className="screen"><img src={screen} alt="screen" /></div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Download