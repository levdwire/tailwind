import plugin from 'tailwindcss/plugin'
import { defu } from 'defu'

/**
 * The TailwindCSS plugin.
 *
 * @type {plugin}
 */
type Plugin = ReturnType<typeof plugin>

/**
 * Merge all available plugins.
 *
 * @param {Plugin[]} plugins
 *
 * @return {any}
 */
export function mergePlugins(plugins: Plugin[]): any {
    // Array in which to store plugin configuration settings.
    let config = {}

    // Optimize plugins configuration settings.
    for (const plugin of plugins) {
        config = defu(config, plugin.config ?? {})
    }

    // Return all merged plugins.
    return plugin((api) => plugins.map((plugin) => plugin.handler(api)), config)
}
