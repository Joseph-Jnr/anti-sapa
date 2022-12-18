import React from 'react'
import Button from '../UI/button/Button'
import '../UI/button/Button.css'
import './header.css'
import user1 from '../../assets/Ellipse7.png'
import user2 from '../../assets/Ellipse8.png'
import user3 from '../../assets/Ellipse9.png'
import { BsApple } from 'react-icons/bs'
import googlePlay from '../../assets/google-play.png'

const Header = () => {
  return (
    <div className="hero">
      <div className="hero-left">
        <div className="text">
          <h2 data-aos="fade-down-right">The Easiest Way to <span>Manage</span> and <span>Save</span> your Money. </h2>
          <p><span className='font-bold'>ANTI-SAPA</span> is the best financial Padi you can trust to help you manage and save your MONEY.</p>
          <Button icon={''} text={"Download app"} btnClass={"btn-primary"} href={"#download"} />
        </div>
      </div>
      <div className="hero-center flex flex-row justify-between">
        {/* First phone mockup */}
        <div className="mockup-one" data-aos="fade-up">
          <div className="screen"></div>
          <div className="frame"></div>
          <div className="shadow"></div>
        </div>

        {/* Second phone mockup */}
        <div className="mockup-two" data-aos="zoom-in">
          <div className="screen"></div>
          <div className="frame"></div>
          <div className="shadow"></div>
        </div>
      </div>

      <div className="hero-right">
        <div className="img-group flex flex-row">
          <img src={user1} className="z-40" alt="user img" />
          <img src={user2} className="z-30" alt="user img" />
          <img src={user3} className="z-20" alt="user img" />
        </div>
        <div className="text">
          <h2>290K +</h2>
          <p>Happy Customers Using ANTI-SAPA</p>
        </div>
        <div className="hero-download-btns">
          <h3>Download at</h3>
          <Button icon={<BsApple />} text={"Get on iPhone"} btnClass={"btn-outline"} href={"#apple"} />
          <Button icon={<img src={googlePlay} alt='google play' />} text={"Get on Android"} btnClass={"btn-outline"} href={"#google"} />
        </div>
      </div>
    </div>
  )
}

export default Header