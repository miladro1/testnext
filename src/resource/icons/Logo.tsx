import { ResourceProps } from '@togetherise/core/models/Resouce.type'
import React, { FC } from 'react'

const Logo: FC<ResourceProps> = ({ ...props }) => {
    return (
        <svg width="68" height="68" viewBox="0 0 68 68" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
            <rect width="68" height="68" rx="34" fill="#018184" />
            <path d="M31.2088 19.958H37.167V13.9999H31.2088V19.958Z" fill="white" />
            <path opacity="0.8" d="M38.826 19.958H44.7842V13.9999H38.826V19.958Z" fill="white" />
            <path opacity="0.5" d="M46.4335 19.958H52.3916V13.9999H46.4335V19.958Z" fill="white" />
            <path opacity="0.5" d="M15.9999 19.958H21.958V13.9999H15.9999V19.958Z" fill="white" />
            <path opacity="0.8" d="M23.5995 19.958H29.5576V13.9999H23.5995V19.958Z" fill="white" />
            <path opacity="0.95" d="M31.2178 29.2167V35.1748H37.1759V29.2167H31.2178Z" fill="white" />
            <path opacity="0.8" d="M31.2178 36.8251V42.7832H37.1759V36.8251H31.2178Z" fill="white" />
            <path opacity="0.7" d="M31.209 44.4335V50.3916H37.1671V44.4335H31.209Z" fill="white" />
            <path opacity="0.5" d="M31.209 52.0419V58H37.1671V52.0419H31.209Z" fill="white" />
            <path opacity="0.95" d="M31.2178 21.617V27.5752H37.1759V21.617H31.2178Z" fill="white" />
        </svg>
    )
}

export default Logo