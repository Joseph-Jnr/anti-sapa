import React from 'react'
import Button from '../UI/button/Button'
import './about.css'
import Features from './Features'
import { featureList } from './data.js'

const About = () => {
  return (
    <section className='about-section py-20'>
      <div className="container about-section-wrap flex flex-row">
        <div className="left-area">
          <h2>Why we are your best <span>finance Padi</span> when it comes to <span>beating SAPA?</span></h2>

          {/* Meta data */}
          <div className="meta-info flex flex-row">
            <div className="single-meta">
              <h5>5M+</h5>
              <p>Active Users</p>
            </div>
            <div className="single-meta">
              <h5>10k+</h5>
              <p>Atm Booth</p>
            </div>
            <div className="single-meta">
              <h5>500+</h5>
              <p>Bank Outlets</p>
            </div>
          </div>

          {/* Learn more btn */}
          <div className="learn-btn">
            <Button icon={''} text={'Learn More'} btnClass={'btn-primary'} href={'#learnMore'} />
          </div>
        </div>
        <div className="right-area grid grid-cols-2 gap-2">
          {
            featureList.map((feature) => (
              <Features key={feature.id} number={feature.number} heading={feature.heading} text={feature.text} />
            ))
          }
          
        </div>
      </div>
    </section>
  )
}

export default About