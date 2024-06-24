import React from 'react'
import Button from "../components/Button"

const Subscribe = () => {
  return (
    <section id='subscribe' className='flex  justify-between items-center gap-10 max-lg:flex-col max-container'>
      <h3 className='font-palanquin font-bold text-4xl lg:max-w-md leading-[68px]   '>
      Sign Up for
      <span className='text-coral-red '> Updates</span> & Newsletter
      </h3>
      <div className='lg:max-w-[40%] w-full flex item-center max-sm:flex-col gap-5 p-2.5 sm:border sm:border-slate-gray rounded-full '>
        <input type="text" placeholder='subscribe@nike.com' className='input' name="" id="" />
        <div className='max-sm:justify-end items-center max-sm:w-full flex '>
        <Button
         label="Sign UP"
         fullWidth
         />

        </div>
      </div>

    </section>
  )
}

export default Subscribe