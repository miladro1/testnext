import { ResourceProps } from '@togetherise/core/models/Resouce.type'
import React, { FC } from 'react'

export const FAQIcon: FC<ResourceProps> = ({ ...props }) => {
    return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
            <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentcolor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M12.5 14V13.6734C12.5 12.6156 13.1326 12.0556 13.7651 11.6045C14.3826 11.1689 15 10.6089 15 9.58228C15 8.15116 13.8856 7 12.5 7C11.1144 7 10 8.15116 10 9.58228" stroke="currentcolor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M12.4955 17.5H12.5045" stroke="currentcolor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
    )
}
