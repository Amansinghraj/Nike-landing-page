import React from 'react'
import { footerLogo } from '../assets/images'
import { footerLinks, socialMedia } from '../constant'
import { copyrightSign } from '../assets/icons'

const Footer = () => {
  return (
    <footer className='max-continer'>
      <div className='flex justify-between items-start flex-wrap gap-20 max-lg:flex-col'>
        <div className='flex flex-col items-start'>
          <a href="/">
            <img src={footerLogo} 
              alt="footerlogo"
              width={150}
              height={40}
              className='m-0'
              />
          </a>
          <p className='mt-6 text-base text-white-400 font-montserrat sm:max-w-sm leading-7 '>
          Get shoes ready for the new term at your nearest Nike store. Find
          Your perfect Size In Store. Get Rewards
          </p>
          <div className='flex items-center gap-5 mt-8'>
            {
              socialMedia.map((icon) =>(
                <div key={icon.alt}
                className='flex justify-center items-center w-12 h-12 bg-white rounded-full '
                > 
                  <img src={icon.src} alt={icon.alt} width={24} height={24} />
                </div>
              ))
            }

          </div>
        </div>

        <div className='flex flex-1 justify-between lg:gap-10 gap-20 flex-wrap'>
            {
              footerLinks.map((section) =>(
                <div key={section.title}>
                  <h4 className='font-montserrat text-2xl leading-normal font-medium mb-6 text-white'>{section.title}

                  </h4>
                  <ul>
                    {section.links.map((link) =>(
                      <li key={link.name}
                      className='mt-3 font-montserrat text-base leading-normal text-white-400 hover:text-slate-gray'>
                        <a href={link.link}>{link.name}</a>
                      </li>

                    ))}

                  </ul>
                </div>
              ))
            }
        </div>
      </div>
      
      <div className='flex justify-between text-white-400 mt-24 max-sm:flex-col max-sm:items-center'>
        <div className='flex flex-1 justify-start items-center gap-2 font-montserrat cursor-pointer'>
          <img
            src={copyrightSign}
            alt='copyright sign'
            width={20}
            height={20}
            className='rounded-full m-0'
          />
          <p>Copyright. All rights reserved.</p>
        </div>
        <p className='font-montserrat cursor-pointer'>Terms & Conditions</p>
      </div>
    </footer>
  )
}

export default Footer