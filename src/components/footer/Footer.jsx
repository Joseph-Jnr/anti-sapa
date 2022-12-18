import React, { useState, useEffect } from 'react'
import './footer.css'
import vector1 from '../../assets/Vector 11.svg'
import logoText from '../../assets/Anti-Sapa1.svg'
import vector2 from '../../assets/Vector 22.svg'
import Button from '../UI/button/Button'
import { BsFacebook, BsInstagram } from 'react-icons/bs'
import { FiTwitter, FiLinkedin } from 'react-icons/fi'
import { HiPaperAirplane } from 'react-icons/hi'

const Footer = () => {
  const [isDesktop, setDesktop] = useState(window.innerWidth > 765);

  const updateMedia = () => {
    setDesktop(window.innerWidth > 765);
  };

  useEffect(() => {
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  });

  return (
    <footer>
      <div className="footer container">
        <div className="top-footer">
          <div className="col_1">
            <div className='logo'>
              <a href="#home">
                <img src={vector1} alt="vector 1" />
                <img src={logoText} alt="logo text" />
                <img src={vector2} alt="vector 2" />
              </a>
            </div>
            <p>Kindly input your email address to get our daily newsletters.</p>
            <form>
              <div className="input-group">
                <input type="email" placeholder='Enter your email' />
                <Button icon={''} text={ isDesktop ? 'Subscribe Now' : <HiPaperAirplane size={23} /> } btnClass={'btn-primary'} href={'#'} />
              </div>
            </form>
          </div>
          <div className="col_2 quick-link">
            <h4>Platform</h4>
            <ul>
              <li><a href="#link">Overview</a></li>
              <li><a href="#link">Features</a></li>
              <li><a href="#link">About</a></li>
              <li><a href="#link">Blog</a></li>
            </ul>
          </div>
          <div className="col_3 quick-link">
            <h4>Help</h4>
            <ul>
              <li><a href="#link">How does it work?</a></li>
              <li><a href="#link">Frequently asked questions</a></li>
              <li><a href="#link">Customer Support lines</a></li>
              <li><a href="#link">What is needed for this?</a></li>
            </ul>
          </div>
          <div className="col_4 quick-link">
            <h4>Contact</h4>
            <p>116, Airport Road, Ikeja <br /> Lagos, Nigeria(NG)</p>
            <p>contact@anti-sapa.com</p>
            <p>+234 905 281 0662</p>
            <div className="socials">
              <a href="#social"><BsFacebook /></a>
              <a href="#social"><FiTwitter /></a>
              <a href="#social"><BsInstagram /></a>
              <a href="#social"><FiLinkedin /></a>
            </div>
          </div>
        </div>
      </div>
        <div className="copyright text-center">
          <p className='container'><span>&copy;</span> ANTI-SAPA 2022. All rights reserved. Landing page designed by <a href="https://twitter.com/The_mauteen" target='_blank' rel="noopener noreferrer">Mauteen</a> & developed by <a href="https://twitter.com/Joseph_jnr1" target='_blank' rel="noopener noreferrer">JosephJnr</a>.</p>
        </div>
    </footer>
  )
}

export default Footer