import type { Config } from 'tailwindcss'

/**
 * Type declaration for deep partials.
 */
type DeepPartial<T> = T extends object
    ? {
        [P in keyof T]?: DeepPartial<T[P]>
    }
    : T

/**
 * Configurations of Levdwire plugins.
 */
type LevdwireUIPlugins = {}

/**
 * Configurations of default theme.
 */
type BaseTheme = Config['theme']

/**
 * Configurations of default theme.
 */
type LevdwireUITheme = BaseTheme &
    DeepPartial<{
        levdwire: LevdwireUIPlugins
    }>

/**
 * Configurations of Levdwire.
 */
export type LevdwireUIConfig = Config & {
    theme?: LevdwireUITheme & { extend?: LevdwireUITheme }
}
