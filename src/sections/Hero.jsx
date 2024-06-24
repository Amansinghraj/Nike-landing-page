import {React, useState} from 'react'
import Button from '../components/Button'
import { arrowRight } from '../assets/icons'
import { shoes, statistics } from '../constant'
import { bigShoe1 } from '../assets/images'
import ShoeCard from '../components/ShoeCard'

const Hero = () => {
  const[bigShoeImg,setBigshoeImg]=useState(bigShoe1)
  return (
    <section id='home' className='w-full flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-container '>
      <div className='relative xl:w-2/5  flex flex-col justify-center items-start w-full max-xl:padding-x pt-28 '>
        <p className='text-xl font-montserrat text-coral-red'> 
          Our Summer collections
        </p>
        <h1 className='mt-10 font-palanquin text-8xl max-sm:text-[72px] max-sm:leading-[82px] font-bold'>
          <span className='xl:bg-white xl:whitespace-nowrap z-10 pr-10 relative  '> 
            The New Arrival 
          </span>
          <br />
          <span className='text-coral-red inline-block mt-3'>
            Nike
          </span> Shoe
        </h1>
        <p className='font-montserrat text-lg text-slate-gray leading-8 mt-8 mb-14 sm:max-w-sm '>
          Discover stylish Nike arrivals, quality comfort, and innovation for
        your active life.
        </p>
        <Button label='Shop now' iconUrl={arrowRight}/>

        <div className='flex justify-start items-start w-full mt-20 flex-wrap gap-16'>
          {statistics.map((stat,index) =>(
            <div key={index}>
              <p className='font-bold text-4xl font-palanquin '>{stat.value}</p>
              <p className='font-montserrat text-slate-gray leading-7 '>{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      <div className='relative flex justify-center items-center xl:min-h-screen max-xl:py-40 bg-primary bg-hero bg-cover bg-center'>
        
        <img 
        src={bigShoeImg} 
        alt="big shoe"
        width={610}
        height={500}
        className=' object-contain relative z-10'
        />
        <div className='flex gap-4 sm:gap-6 absolute -bottom-[5%] sm:left-[10%] max-sm:px-6'>
          {shoes.map((shoe) =>(
          <div key={shoe}>
            <ShoeCard
              imgUrl={shoe}
              changeBigShoeImage=
              {(shoe) => setBigshoeImg(shoe)}
              bigShoeImg={bigShoeImg}
            />
            
          </div>

        ))}
        </div>
        
      </div>
      
      
    </section>
  )
}

export default Hero