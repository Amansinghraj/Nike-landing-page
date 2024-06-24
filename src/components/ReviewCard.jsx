import React from 'react'
import { star } from '../assets/icons'

const ReviewCard = ({
    imgURL,CustomerName,rating,feedback
}) => {
  return (
    <div className='flex justify-center items-center flex-col'>
        <img src={imgURL} alt="customer"
        className='rounded-full object-cover w-[120px] h-[120px]'
         />
        <p className='mt-6 max-w-sm  text-center info-text'>{feedback}</p>
         <div className='flex  justify-center items-center gap-2.5'>
            <img src={star} 
            alt="rating start"
            width={24}
            height={24}
            className='object-contain m-0 '
            />
            <p>{rating}</p>
         </div>
    </div>
  )
}

export default ReviewCard