'use client'
import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Button from './Button'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [isOpen])
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const closeMenu = () => setIsOpen(false)

  return (
    <>
      <div
        className={`fixed w-full px-4 z-50 transition-all duration-300 ${scrolled ? "bg-white shadow-md" : "bg-transparent"
          }`}
      >
        <div className='max-w-285 mx-auto py-6.25 justify-between flex flex-row items-center'>
          <Image
            src={'/assets/images/svg/logo.svg'}
            width={118}
            height={30}
            alt='nav_logo'
          />
          <div className='hidden md:flex flex-row gap-[27.1px]'>
            <div className='flex flex-row mt-3 gap-11.25'>
              <Link href="">About Us</Link>
              <Link href="">News</Link>
              <Link href="">Contact Us</Link>
            </div>
            <Button
              variants='first'
              text={'Get Started'}
              className={'h-11.25 w-30.5'}
            />
          </div>
          <button
            className='md:hidden flex flex-col justify-center items-center w-10 h-10 gap-[5.1px] z-60 relative'
            onClick={() => setIsOpen(prev => !prev)}
            aria-label='Toggle menu'
            aria-expanded={isOpen}
          >
            <span
              className='block w-[22.1px] h-[2.1px] bg-current rounded-sm transition-transform duration-350 ease-[cubic-bezier(0.23,1,0.32,1)]'
              style={{ transform: isOpen ? 'translateY(7px) rotate(45deg)' : 'none' }}
            />
            <span
              className='block w-[22.1px] h-[2.1px] bg-current rounded-sm transition-opacity duration-200'
              style={{ opacity: isOpen ? 0 : 1 }}
            />
            <span
              className='block w-[22.1px] h-[2.1px] bg-current rounded-sm transition-transform duration-350 ease-[cubic-bezier(0.23,1,0.32,1)]'
              style={{ transform: isOpen ? 'translateY(-7px) rotate(-45deg)' : 'none' }}
            />
          </button>
        </div>
      </div>
      <div
        onClick={closeMenu}
        className={`fixed inset-0 z-40 bg-white/30 transition-opacity duration-300 md:hidden
   ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
      />
      <div
        className={`fixed top-0 right-0 h-full w-72 z-50 bg-white dark:bg-neutral-900
   border-l border-neutral-200 dark:border-neutral-700
   flex flex-col pt-24 px-7 pb-8 gap-0 md:hidden
   transition-transform duration-400 ease-[cubic-bezier(0.23,1,0.32,1)]
   ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        <div className='text-white cursor-pointer absolute top-7 text-4xl right-8' onClick={closeMenu} >⤬</div>
        {['About Us', 'News', 'Contact Us'].map((label) => (
          <Link
            key={label}
            href=""
            onClick={closeMenu}
            className='text-base py-4 border-b border-neutral-100 dark:border-neutral-800 text-neutral-600 dark:text-neutral-300 hover:text-black dark:hover:text-white transition-colors'
          >
            {label}
          </Link>
        ))}
        <Button
          variants='first'
          text={'Get Started'}
          className='mt-6 w-full h-11.25'
        />
      </div>
    </>
  )
}

export default Navbar