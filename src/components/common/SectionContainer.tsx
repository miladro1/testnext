import { cn } from '@togetherise/shadcn/lib/utils'
import React, { FC, ReactNode } from 'react'

interface ISectionContainerProps {
    children: ReactNode
    className?: string
}

export const SectionContainer: FC<ISectionContainerProps> = ({ children, className }) => {
    return (
        <div className={cn('', className)}>{children}</div>
    )
}
