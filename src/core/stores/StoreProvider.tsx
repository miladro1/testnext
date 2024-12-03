import { FC, ReactNode } from 'react'
import { PreferencesStoreProvider } from './PreferenceStore/preference.provider'

interface IStoreProvider {
    children: ReactNode
}

/**
 * Add store providers to this component. Do not directly add stores to _app.tsx 
 * @returns a component with all the stores
 */

export const StoreProvider: FC<IStoreProvider> = ({ children }) => {
    return (
        <PreferencesStoreProvider>{children}</PreferencesStoreProvider>
    )
}
