import { Locale } from "./Locale.type"
import { Theme } from "./Theme.type"

export type Preferences = {
    lang: Locale // TODO: replace this type with better JS related alternatives to support locales dynamically
    theme: Theme
}

