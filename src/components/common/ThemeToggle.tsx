"use client"

import React, { useEffect } from "react"
import { Button } from "@togetherise/shadcn/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@togetherise/shadcn/components/ui/dropdown-menu"
import { useTheme } from "@togetherise/core/stores/PreferenceStore/preference.store"
import { usePreferencesStore } from "@togetherise/core/stores/PreferenceStore/preference.provider"
import { useTranslations } from "next-intl"
import { Moon, Sun1 } from "iconsax-react"

export const ModeToggle = () => {
    const t = useTranslations()
    const theme = useTheme()
    const changeTheme = usePreferencesStore(store => store.changeTheme)

    useEffect(() => {
        // Apply theme to document
        document.documentElement.setAttribute('data-theme', theme);
        if (theme == "dark") {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, [theme]);

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button size="iconSM" variant={"ghost"}>
                    <Sun1 className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0 dark:border" />
                    <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"/>
                    <span className="sr-only">Toggle theme</span>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={() => changeTheme("light")}>
                    {t("light")}
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => changeTheme("dark")}>
                    {t("dark")}
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}
