'use client'

import { useRouter, usePathname } from 'next/navigation'
import { useTranslations } from 'next-intl'
import { usePreferencesStore } from '@togetherise/core/stores/PreferenceStore/preference.provider'
import { Locale } from '@togetherise/core/models/Locale.type'
import { useLocale } from '@togetherise/core/stores/PreferenceStore/preference.store'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@togetherise/shadcn/components/ui/select"
const LocaleSwitcher = () => {
    const t = useTranslations()
    const router = useRouter()
    const pathname = usePathname()
    const locale = useLocale()
    const changeLocale = usePreferencesStore(store => store.changeLocale)

    const handleLocaleChange = (newLocale: string) => {
        const newPath = pathname.replace(`/${locale}/`, `/${newLocale}/`)
        changeLocale(newLocale as Locale)
        router.push(newPath)
    }

    return (
        <Select value={locale} onValueChange={val => handleLocaleChange(val)}>
            <SelectTrigger className="w-[120px]">
                <SelectValue placeholder="Theme" />
            </SelectTrigger>
            <SelectContent>
                <SelectItem value="en-US">{t("english")}</SelectItem>
                <SelectItem value="fa-IR">{t("persian")}</SelectItem>
            </SelectContent>
        </Select>
    )
}

export { LocaleSwitcher }