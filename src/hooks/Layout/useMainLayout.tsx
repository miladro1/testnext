'use client'
import { MainFooter } from '@togetherise/components/common/MainFooter'
import { MainHeader } from '@togetherise/components/common/MainHeader'
import React, { ReactNode } from 'react'

// TODO: this layout needs to be implemented based on design
export const useMainLayout = (children: ReactNode) => {
    return function Wrapped() {
        // common logic of main pages
        // const t = useTranslations("common")

        return (<>
            <MainHeader />
            <div>{children}</div>
            <MainFooter />
        </>
        )
    }
}
