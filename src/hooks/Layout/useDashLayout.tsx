'use client'

import { Separator } from '@radix-ui/react-separator'
import { AppSidebar } from '@togetherise/shadcn/components/app-sidebar'
import { SidebarInset, SidebarProvider, SidebarTrigger, useSidebar } from '@togetherise/shadcn/components/ui/sidebar'
import { useTranslations } from 'next-intl'
import React, { FC, ReactNode } from 'react'
import { useDirection } from '../useDirection'
import { Typography } from '@togetherise/components/common/Typography'
import { AvatarDropdown } from '@togetherise/components/common/AvatarDropdown'
import { NotificationBell } from '@togetherise/components/common/NotificationBell'
import { cn } from '@togetherise/shadcn/lib/utils'
import Logo from '@togetherise/resource/icons/Logo'


export const useDashLayout = (children: ReactNode) => {
    return function Wrapped() {
        // common logic of dashboard pages
        const direction = useDirection()
        const side = direction == "rtl" ? "right" : "left";
        return (
            <>
                <SidebarProvider>
                    <AppSidebar dir={direction} side={side} className={cn(side == "right" ? "shadow-dash-sidebar-left" : "shadow-dash-sidebar-right")} />
                    <SidebarNavbar>{children}</SidebarNavbar>
                </SidebarProvider>
            </>
        )
    }
}

interface ISidebarHeaderProps {
    children: ReactNode
}

const SidebarNavbar: FC<ISidebarHeaderProps> = ({ children }) => {
    const { open } = useSidebar()
    const t = useTranslations()
    return (
        <SidebarInset>
            <header className="shadow-dash-header bg-grey-0 dark:bg-grey-900 absolute left-0 z-[50] w-full px-4 flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12 justify-between border-b-[1px]">
                <div className="flex items-center gap-2 px-4">
                    <SidebarTrigger className="ms-auto" />
                    <Separator orientation="vertical" className="mr-2 h-4" />
                    <Logo height={open ? 42 : 32} width={open ? 42 : 32}/>
                    <Typography variant={open ? 'h4' : "h6"}>{t("togetherise")}</Typography>
                </div>
                <div className='flex items-center gap-2 px-4'>
                    <NotificationBell hasNotif={false} />
                    <AvatarDropdown alt='avatar name' profileSrc="https://github.com/shadcn.png" />
                </div>
            </header>
            <div className="flex flex-1 flex-col gap-4 p-4 pt-20">
                {children}
            </div>
        </SidebarInset>
    )
}