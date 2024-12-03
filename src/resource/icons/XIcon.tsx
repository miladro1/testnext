import { ResourceProps } from '@togetherise/core/models/Resouce.type'
import React, { FC } from 'react'

const XIcon: FC<ResourceProps> = ({ ...props }) => {
    return (
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
            <rect width="32" height="32" fill="#F9D04A" />
            <path d="M5 7L12.64 17.704L5.40166 26H8.24484L13.9123 19.4873L18.5598 26H26L18.0088 14.7847L24.7824 7H21.9834L16.7407 13.0035L12.4633 7H5ZM9.13439 9.11111H11.3404L21.8677 23.8889H19.6807L9.13439 9.11111Z" fill="#014D4F" />
        </svg>
    )
}

export default XIcon