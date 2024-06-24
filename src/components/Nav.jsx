import React from 'react'
import {headerLogo} from "../assets/images"
import { navLinks } from '../constant'
import { hamburger } from '../assets/icons'

const Nav = () => {
  return (
    <header className='absolute w-full z-10 padding-x py-8'>
      <nav className='flex justify-between items-center max-container'>
        <a href="/">
          <img src={headerLogo} 
          className='m-0 w-[129px] h-[29px]'
          alt="logo"
          width={129}
          height={29}
           />
        </a>
        <ul className='flex flex-1 justify-center items-center gap-16 max-lg:hidden'>
          {
            navLinks.map((item) =>(
              <li key={item.label}>
                <a href={item.href}
                className='font-montserrat text-lg leading-normal text-slate-gray  '
                >
                  {item.label}
                </a>
              </li>
            ))
          }
        </ul>
        <div className='flex gap-2 text-lg leading-normal font-medium font-montserrat max-lg:hidden wide:mr-24 '>
          <a href="/">Sign in</a>
          <span>/</span>
          <a href="/">Explore Now</a>
        </div>
        <div className='hidden max-lg:block'>
          <img src={hamburger} alt="hamburger icon" width={25} height={25} />
        </div>
      </nav>
    </header>
  )
}

export default Nav