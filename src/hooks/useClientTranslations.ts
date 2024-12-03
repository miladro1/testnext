import { useState, useEffect } from 'react';
import { useLocale } from 'next-intl';
import { loadNamespace } from '@togetherise/core/utils/loadNamespace';

/**
 * DO NOT use this function for now
 * @param namespace 
 * @returns translations based on key and params
 */
export function useClientTranslations(namespace: string) {
    const locale = useLocale();
    const [messages, setMessages] = useState<Record<string, any>>({});
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const loadMessages = async () => {
            setIsLoading(true);
            const namespaceMessages = await loadNamespace(locale, namespace);
            setMessages(namespaceMessages);
            setIsLoading(false);
        };

        loadMessages();
    }, [locale, namespace]);

    const t = (key: string, params?: Record<string, any>) => {
        if (isLoading) return key; // Return key while loading

        // Split the key by dots to handle nested translations
        const parts = key.split('.');
        let value = messages;

        for (const part of parts) {
            value = value?.[part];
            if (value === undefined) return key;
        }
        // TODO: check if this part works with translation params or not
        if (typeof value === 'string' && params) {
            // Handle interpolation
            return Object.entries(params).reduce(
                (str, [param, val]) => str.replace(`{${param}}`, String(val)),
                value as string
            );
        }

        return value ?? key;
    };

    return { t, isLoading };
}