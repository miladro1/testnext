import { type ReactNode, createContext, useRef, useContext } from 'react'
import { useStore } from 'zustand'
import { createPreferencesStore, PreferencesStore } from './preference.store'

export type PreferenceStoreApi = ReturnType<typeof createPreferencesStore>
export const PreferencesStoreContext = createContext<PreferenceStoreApi | undefined>(
    undefined,
)

export interface PreferencesStoreProviderProps {
    children: ReactNode
}


export const PreferencesStoreProvider = ({
    children,
}: PreferencesStoreProviderProps) => {
    const storeRef = useRef<PreferenceStoreApi>()
    if (!storeRef.current) {
        storeRef.current = createPreferencesStore()
    }

    return (
        <PreferencesStoreContext.Provider value={storeRef.current} >
            {children}
        </PreferencesStoreContext.Provider>
    )
}


export const usePreferencesStore = <T,>(
    selector: (store: PreferencesStore) => T,
): T => {
    const preferencesStoreContext = useContext(PreferencesStoreContext)

    if (!preferencesStoreContext) {
        throw new Error(`preferencesStore must be used within PreferencesStoreProvider`)
    }

    return useStore(preferencesStoreContext, selector)
}