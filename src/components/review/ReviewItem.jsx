import React from 'react'
import './ReviewItem.css'

const ReviewItem = ({image, date, name, text}) => {
  return (
    <div className="single-review">
        <div className="avatar">
            <img src={image} alt="avatar" />
        </div>
        <div className="side-text">
            <span>{date}</span>
            <h4>{name}</h4>
            <p>{text}</p>
        </div>
    </div>
  )
}

export default ReviewItem