import { Locale } from '@togetherise/core/models/Locale.type'
import { useLocale } from '@togetherise/core/stores/PreferenceStore/preference.store'
import { useEffect, useState } from 'react'
import { isRtlLang } from 'rtl-detect'

/**
 * A hooks to determine the direction of the app
 * @returns if the direction is rtl(true) or not(false)
 */

export const useDirection = () => {
  const localeFromStore = useLocale()
  const [locale, setLocale] = useState<Locale>(localeFromStore)

  useEffect(() => {
    setLocale(localeFromStore)
  }, [localeFromStore])

  return isRtlLang(locale) ? "rtl" : "ltr"
}
