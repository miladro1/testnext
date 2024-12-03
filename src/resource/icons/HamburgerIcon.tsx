import { ResourceProps } from '@togetherise/core/models/Resouce.type'
import React, { FC } from 'react'

const HamburgerIcon: FC<ResourceProps> = ({...props}) => {
    return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
            <path d="M2 5H21" stroke="currentcolor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M2 19.5H21" stroke="currentcolor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M9.38867 14.5H20.9998" stroke="currentcolor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M9.38867 10H20.9998" stroke="currentcolor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M7.25 11.567C7.58333 11.7594 7.58333 12.2406 7.25 12.433L2.75 15.0311C2.41667 15.2235 2 14.983 2 14.5981L2 9.40192C2 9.01702 2.41667 8.77646 2.75 8.96891L7.25 11.567Z" fill="currentcolor" />
        </svg>

    )
}

export default HamburgerIcon