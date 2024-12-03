import React, { FC } from 'react'
import { Typography } from './Typography';
import { cn } from '@togetherise/shadcn/lib/utils';

interface ICardBProps {
    number: number | string;
    title: string;
    description: string
    className?: string
}

// this was named after its figma counterpart
export const CardB: FC<ICardBProps> = ({ description, number, title, className }) => {
    return (
        <div className={cn('border flex flex-col flex-1 p-6 border-background-2 col-span-1 row-span-1', className)}>
            <Typography variant='h5' weight='bold' className='text-primary-500 mb-8'>{number}</Typography>
            <Typography variant='body1' weight='bold' className='text-grey-900 mb-4'>{title}</Typography>
            <Typography variant='body2' weight='regular' className='text-grey-850'>{description}</Typography>
        </div>
    )
}
