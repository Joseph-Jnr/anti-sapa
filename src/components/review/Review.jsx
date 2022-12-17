import React from 'react'
import './review.css'
import illustration from '../../assets/53748001.png'
import Button from '../UI/button/Button'
import ReviewItem from './ReviewItem'
import { reviewList } from './data'

const Review = () => {
  return (
    <section className='review-section'>
      <div className="review-wrap container">
        <div className="header text-center">
          <h2>WHAT OUR <span>HAPPY CUSTOMERS</span> ARE SAYING</h2>
        </div>

        <div className="main-reviews">
          <div className="row-child reviews">
            {
              reviewList.slice(0, 3).map((reviews, index) => (
                <ReviewItem key={index} image={reviews.image} date={reviews.date} name={reviews.name} text={reviews.text} />
              ))
            }
            
          </div>
          <div className="row-child rating-illustration">
            <img src={illustration} alt="illustration" />
            <Button icon={""} text={"Sign up now"} btnClass={"btn-primary"} href={"#signup"} />
          </div>
          <div className="row-child reviews">
            {
              reviewList.slice(3, 6).map((reviews, index) => (
                <ReviewItem key={index} image={reviews.image} date={reviews.date} name={reviews.name} text={reviews.text} />
              ))
            }
          </div>
        </div>
      </div>
    </section>
  )
}

export default Review