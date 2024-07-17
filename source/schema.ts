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
type LevdwirePlugins = {}

/**
 * Configurations of default theme.
 */
type BaseTheme = Config['theme']

/**
 * Configurations of default theme.
 */
type LevdwireTheme = BaseTheme &
    DeepPartial<{
        levdwire: LevdwirePlugins
    }>

/**
 * Configurations of Levdwire.
 */
export type LevdwireConfig = Config & {
    theme?: LevdwireTheme & { extend?: LevdwireTheme }
}
