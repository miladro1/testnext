import { AvatarFallback, AvatarImage, Avatar } from '@togetherise/shadcn/components/ui/avatar'
import { Button } from '@togetherise/shadcn/components/ui/button'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@togetherise/shadcn/components/ui/dropdown-menu'
import { ChevronDown } from 'lucide-react'
import { useTranslations } from 'next-intl'
import React, { FC } from 'react'
import { ModeToggle } from './ThemeToggle'
import { LocaleSwitcher } from './LocaleSwitcher'

interface IAvatarDropdownProps {
    profileSrc: string;
    alt: string
}

export const AvatarDropdown: FC<IAvatarDropdownProps> = ({ profileSrc, alt }) => {
    const t = useTranslations()
    return (
        <DropdownMenu modal={false}>
            <DropdownMenuTrigger asChild>
                <Button size="fit" variant={"ghost"}>
                    <ChevronDown size={20} />
                    <Avatar className='w-[32px] h-[32px]'>
                        <AvatarImage src={profileSrc} alt={alt} />
                        <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={() => { }}>
                    <ModeToggle />
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => { }}>
                    <LocaleSwitcher />
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => { }}>
                    {t("profile")}
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => { }}>
                    {t("logout")}
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}
