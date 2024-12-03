export async function loadNamespace(locale: string, namespace: string) {
    try {
        const messages = await import(`@togetherise/core/libs/intl/locales/${locale}/${namespace}.po`);
        console.log(messages)
        return messages.default;
    } catch (error) {
        // error handling can be improved here (But this case must not happen!)
        console.error(`Failed to load namespace: ${namespace}`, error);
        return {};
    }
}