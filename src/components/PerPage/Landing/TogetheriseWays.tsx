import { CardB } from '@togetherise/components/common/CardB'
import { Typography } from '@togetherise/components/common/Typography'
import React from 'react'

export const TogetheriseWays = () => {
    return (
        <div className='w-full flex flex-col p-5 md:px-[160px] md:py-[100px] sm:px-[70px]'>
            <div className='flex flex-col gap-7'>
                <Typography variant='h3' weight='bold'>How Does Togetherise Work?</Typography>
                <Typography variant='body1' weight='regular' className='text-grey-950'>Investing with Togetherise is straightforward and rewarding. Here’s your path to success:</Typography>
            </div>
            <div className='grid grid-cols-2 lg:grid-cols-4 mt-14'>
                <CardB className='' number={"01"} title='Explore Investment Opportunities' description='Browse through a selection of businesses seeking funding.' />
                <CardB number={"02"} title='Research the Company' description='Review key details about each company before making an investment.' />
                <CardB number={"03"} title='Invest & Grow Your Portfolio' description='Place your investments and watch them grow over time.' />
                <CardB number={"04"} title='Enjoy Revenue Sharing' description='Receive a share of the revenue as businesses succeed.' />
            </div>
        </div>
    )
}
