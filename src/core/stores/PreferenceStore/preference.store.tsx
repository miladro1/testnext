import { persist, createJSONStorage } from 'zustand/middleware'
import { create } from 'zustand'
import { Theme } from '@togetherise/core/models/Theme.type'
import { Locale } from '@togetherise/core/models/Locale.type'
import { Preferences } from '@togetherise/core/models/Preference.type'
import { usePreferencesStore } from './preference.provider'

// store types
export type UserActions = {
    changeTheme: (theme: Theme) => void
    changeLocale: (lang: Locale) => void
}
export type PreferencesStore = Preferences & UserActions

export const defaultInitState: Preferences = {
    lang: "fa-IR",
    theme: 'light'
}

export const createPreferencesStore = (
    initState: Preferences = defaultInitState,
) => {
    return create<PreferencesStore>()(
        persist((set) => ({
            ...initState,
            changeLocale(lang) {
                set((state) => ({ ...state, lang: lang }))
            },
            changeTheme(theme) {
                set((state) => ({ ...state, theme: theme }))
            }
        }),
            {
                name: "preferencePersist",
                storage: createJSONStorage(() => sessionStorage),
                partialize: (state) => ({
                    lang: state.lang,
                    theme: state.theme
                }),
            })
    )
}

export const useTheme = () => usePreferencesStore((state) => state.theme)
export const useLocale = () => usePreferencesStore((state) => state.lang)