import React from 'react'
import './features.css'

const Features = ({number, heading, text}) => {
  return (
    <div className="feature" data-aos="fade-up">
        <div className="feature-header">
            <div className="num">{number}</div>
            <div className="title">
                <h3>{heading}</h3>
            </div>
        </div>
        <div className="feature-text">
            <p>{text}</p>
        </div>
    </div>
  )
}

export default Features