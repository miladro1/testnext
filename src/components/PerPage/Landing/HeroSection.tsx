import Image from 'next/image'
import React from 'react'
import Hero from "@togetherise/assets/images/hero.webp"
import { Typography } from '@togetherise/components/common/Typography'
export const HeroSection = () => {
  return (
    <div className='min-h-[calc(100vh-84px)] w-full flex flex-col lg:flex-row p-5 md:px-[190px]'>
      <div className='flex flex-1 items-center justify-center flex-col'>
        <Typography variant='h2' className='mb-4 text-primary-500'>Invest in a growing business, Make money together</Typography>
        <Typography variant='h7' className='text-grey-1000'>Support Canadian businesses with Togetherise and share in their revenue. Start investing with as little as $100 CAD.</Typography>
      </div>
      <div className='flex flex-1 items-center justify-center mt-12 md:mt-0'>
        <Image src={Hero} alt='hero section image' />
      </div>
    </div>
  )
}
