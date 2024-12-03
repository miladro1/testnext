import { useDashLayout } from '@togetherise/hooks/Layout/useDashLayout'
import React from 'react'

export const DashHomeScreen = () => {
    return (
        <div className='p-4 flex flex-col gap-4'>
            dashboard screen
        </div>
    )
}

export const DashboardHomeScreen = useDashLayout(<DashHomeScreen />)