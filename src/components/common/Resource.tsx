import { IconResource } from '@togetherise/resource/resource.map'
import { cn } from '@togetherise/shadcn/lib/utils'
import React, { FC, useEffect, useState } from 'react'

interface IResourceProps {
    name: keyof typeof IconResource
    height?: string | number
    width?: string | number
    className?: string
    [k: string]: any
}
// TODO: add image variant
export const Resource: FC<IResourceProps> = ({ name, className, height, width, ...props }) => {
    const [Resource, setResource] = useState<any>(null)

    useEffect(() => {
        let loadFunc: (() => Promise<any>) | undefined
        if (IconResource[name]) {
            loadFunc = IconResource[name]
        }
        else {
            loadFunc = undefined
        }
        if (!loadFunc) {
            throw Error(
                `${name} is not a defined resource, please check again!`
            )
        }

        loadFunc().then(Icon => {
            setResource(
                <Icon.default
                    {...props}
                    {...(width ? { width: width } : { width: "100%" })}
                    {...(height ? { height: height } : { height: "100%" })}
                />
            )
        })
    }, [name, width, height])

    return (
        <div
            className={cn(`w-[${width}px] h-[${height}px] flex items-center`, className)}
        >
            {Resource}
        </div>
    )
}
