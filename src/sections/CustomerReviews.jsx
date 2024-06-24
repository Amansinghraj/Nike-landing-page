import React from 'react'
import ReviewCard from '../components/ReviewCard'
import { reviews } from '../constant'

const CustomerReviews = () => {
  return (
    <section id='customer' className='max-container' >
      <h1 className='font-palanquin text-center  font-bold text-4xl'>
        What Our
        <span className='text-coral-red '>Customers</span> Say?
      </h1>
      <p className='m-auto mt-4 max-w-lg text-center info-text'>
      Hear genuine stories from our satisfied customers about their
      exceptional experiences with us.
      </p>
      <div className='flex flex-1 justify-evenly items-center max-lg:flex-col gap-14 mt-24  '>
        {
          reviews.map((review ,index) =>(
            <ReviewCard
            key={index}
            imgURL={review.imgURL}
            CustomerName= {review.CustomerName}
            rating={review.rating}
            feedback={review.feedback}
            />
          ))
        }
      </div>

    </section>
  )
}

export default CustomerReviews