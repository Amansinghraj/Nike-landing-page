import React from 'react'
import ServiceCard from '../components/ServiceCard'
import { services } from '../constant'

const Services = () => {
  return (
    <section id='services' className='flex max-container justify-center flex-wrap gap-9'>
      {
        services.map((service) =>(
          <ServiceCard
           key={service.label} {...service}
          />
        ))
      }
    </section>
  )
}

export default Services