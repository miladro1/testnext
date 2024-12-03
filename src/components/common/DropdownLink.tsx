import React, { FC, ReactNode } from 'react';
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuList,
    NavigationMenuTrigger
} from "@togetherise/shadcn/components/ui/navigation-menu";
import { Divide } from 'lucide-react';
import { Resource } from './Resource';
import { Typography } from './Typography';
import { useTranslations } from 'next-intl';

interface IHoverDropdownLinkProps {
    label: string;
    // children: ReactNode
    items: IDropdownLinkItemProps[]
}

export const HoverDropdownLink: FC<IHoverDropdownLinkProps> = ({ label, items }) => {
    return (
        <NavigationMenu>
            <NavigationMenuList>
                <NavigationMenuItem>
                    <NavigationMenuTrigger className="hover:bg-transparent">
                        <Typography variant='body2' weight='bold'>{label}</Typography>
                    </NavigationMenuTrigger>
                    <NavigationMenuContent className='p-1'>
                        {items.map(item => <DropdownLinkItem key={item.href} href={item.href} icon={item.icon} label={item.label} />)}
                    </NavigationMenuContent>
                </NavigationMenuItem>
            </NavigationMenuList >
        </NavigationMenu>
    );
};

interface IDropdownLinkItemProps {
    label: string;
    href: string;
    icon: string | ReactNode
}

export const DropdownLinkItem: FC<IDropdownLinkItemProps> = ({ href, icon, label }) => {
    const t = useTranslations()
    const getIcon = () => {
        if (typeof icon == "string") {
            return <Resource name={icon as any} />
        } else {
            return icon
        }
    }
    return (<a className='flex text-primary-500 py-1 px-[6px] gap-2 items-center hover:bg-[#E8F2EE] rounded text-nowrap' href={href} >
        {getIcon()}
        <Typography variant='body3' weight='medium' className='text-grey-850'>{t(label)}</Typography>
    </a>)
}