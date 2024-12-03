import { NextIntlClientProvider } from 'next-intl';
import { FC, ReactNode, useEffect, useState } from 'react';
import { usePreferencesStore } from '@togetherise/core/stores/PreferenceStore/preference.provider';
import { getLangDir, isRtlLang } from "rtl-detect"
import { loadNamespace } from '@togetherise/core/utils/loadNamespace';
import { DirectionProvider } from "@radix-ui/react-direction";
interface INextIntlProviderProps {
    children: ReactNode
}


export const NextIntlProvider: FC<INextIntlProviderProps> = ({ children }) => {
    const [messages, setMessages] = useState();
    // get locale from zustand
    const locale = usePreferencesStore(store => store.lang)
    const direction = isRtlLang(locale) ? "rtl" : "ltr"
    useEffect(() => {
        // use rtl detect to direction based on locale dynamically
        const direction = getLangDir(locale);
        if (document.documentElement.dir != direction) {
            document.documentElement.dir = direction;
        }
        // load translations
        loadTranslations()
    }, [
        locale
    ])

    const loadTranslations = async () => {
        const localeMSG = await loadNamespace(locale, "locale")
        console.log("localeMSG", localeMSG)
        setMessages({
            ...localeMSG
        })
    }

    return <NextIntlClientProvider
        locale={locale}
        messages={messages}
    >
        {/* TODO: replace this loading with a better loading component */}
        {messages ?
            <DirectionProvider dir={direction}>{children}</DirectionProvider>
            :
            <div>loading</div>
        }
    </NextIntlClientProvider>
}