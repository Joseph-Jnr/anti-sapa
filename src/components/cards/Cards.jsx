import React, { useState, useEffect } from 'react'
import './cards.css'
import card1 from '../../assets/card1.png'
import card2 from '../../assets/card2.png'
import card3 from '../../assets/card3.png'

import icon1 from '../../assets/icon1.png'
import icon2 from '../../assets/icon2.png'
import icon3 from '../../assets/icon3.png'
import icon4 from '../../assets/icon4.png'
import icon5 from '../../assets/icon5.png'
import Carousel from './Carousel'


const Cards = () => {
  const [isDesktop, setDesktop] = useState(window.innerWidth > 765);

  const updateMedia = () => {
    setDesktop(window.innerWidth > 765);
  };

  useEffect(() => {
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  });

  return (
    <section className='cards-section'>
      <div className="card-wrapper container">
        <div className="header text-center">
          <div className="text">
            <h4><span>ANTI-SAPA</span> PROVIDES VIRTUAL CARDS</h4>
            <p>With <span>ANTI-SAPA</span> virtual card service you can set up your virtual credit card account in seconds, manage it online, and withdraw money at an ATM or pay online in just a few simple steps.</p>
          </div>
        </div>

        {/* Virtual Cards */}
        <div className="virtual-cards">
          {
            isDesktop ? (
            <div className="card-group flex flex-row justify-between">
              <img src={card1} alt="Virtual card" />
              <img src={card2} alt="Virtual card" />
              <img src={card3} alt="Virtual card" />
            </div>
             ) : (
            <div className="slider" data-aos="flip-right">
              <Carousel>
                <div>
                  <img src={card1} alt="Virtual card" />
                </div>
                <div>
                  <img src={card2} alt="Virtual card" />
                </div>
                <div>
                  <img src={card3} alt="Virtual card" />
                </div>
              </Carousel>
            </div>
             )
          }
        </div>

        {/* Card features */}
        <div className="card-features">
          <div className="single-feature">
            <div className="icon">
              <img src={icon1} alt="icon" />
            </div>
            <div className="text">
              <p>ONLINE TRANSACTIONS</p>
            </div>
          </div>

          <div className="single-feature">
            <div className="icon">
              <img src={icon2} alt="icon" />
            </div>
            <div className="text">
              <p>EARN REWARDS</p>
            </div>
          </div>

          <div className="single-feature">
            <div className="icon">
              <img src={icon3} alt="icon" />
            </div>
            <div className="text">
              <p>IN STORES</p>
            </div>
          </div>

          <div className="single-feature">
            <div className="icon">
              <img src={icon4} alt="icon" />
            </div>
            <div className="text">
              <p>SAFETY</p>
            </div>
          </div>

          <div className="single-feature">
            <div className="icon">
              <img src={icon5} alt="icon" />
            </div>
            <div className="text">
              <p>SUPPORT IN ATMS</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Cards