import type { LevdwireConfig } from './schema'
import typography from '@tailwindcss/typography'
import containerQueries from '@tailwindcss/container-queries'
import { base, components, utilities } from './plugins'
import { defaultTheme } from './theme'

/**
 * Identifying symbol for unique configuration options.
 *
 * @type {string}
 */
const LevdwireSymbol: string = '__is_levdwire'

/**
 * Test if a tailwind config has the levdwire preset already added.
 *
 * @return {boolean}
 */
export function hasPreset(config: LevdwireConfig): boolean {
    // Check if a default config has already been added.
    if (config.presets && Array.isArray(config.presets)) {
        return config.presets.some((preset) => preset && LevdwireSymbol in preset)
    }

    return false
}

/**
 * Create a levdwire preset, optionally with a custom theme and custom plugins list.
 */
export function createPreset({theme = defaultTheme, plugins = [
    // Tailwind (Typography)
    typography,
    // Tailwind (Container Queries)
    containerQueries,
    // Levdwire (Base)
    base,
    // Levdwire (Components)
    components,
    // Levdwire (Utilities)
    utilities,
]}: {
    theme?: LevdwireConfig['theme']
    plugins?: LevdwireConfig['plugins']
} = {}) {
    // Configure some preset settings.
    const config = {
        darkMode : ['selector', '[levdwire:mode="dark"]'],
        content  : [], 
        plugins, 
        theme,
    } satisfies LevdwireConfig

    // Set a hidden symbol so we can detect if the user has already added the preset.
    Object.defineProperty(config, LevdwireSymbol, {
        value: true,
        enumerable: false,
        writable: false,
    })

    // Return the default configuration options now that all actions have been completed.
    return config
}

/**
 * The default levdwire preset.
 */
export const preset = createPreset()
