import React, { FC } from 'react'
import { Resource } from './Resource'
import { Notification } from 'iconsax-react'
import { Button } from '@togetherise/shadcn/components/ui/button'

interface INotificationBellProps {
    hasNotif: boolean
}

export const NotificationBell: FC<INotificationBellProps> = ({ hasNotif }) => {
    return (
        <Button size={'iconMD'} variant={"ghost"}>
            {hasNotif ? <Resource name='NotificationBell' height={24} width={24} /> : <Notification size="24" color="currentcolor" />}
        </Button>
    )
}
