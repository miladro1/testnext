import { ResourceProps } from '@togetherise/core/models/Resouce.type'
import React, { FC } from 'react'

const HamburgerIcon2: FC<ResourceProps> = ({ ...props }) => {
    return (
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
            <path d="M4 9.33301H28" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" />
            <path d="M4 16H28" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" />
            <path d="M4 22.667H28" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
    )
}

export default HamburgerIcon2