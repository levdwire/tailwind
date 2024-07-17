import type { LevdwireConfig } from './schema'
import { preset, hasPreset } from './preset'
export * from './preset'


/**
 * Inject the levdwire preset into a tailwind config if not already present.
 */
export function withLevdwire(config: LevdwireConfig) {
    // Check if it is preset.
    if (hasPreset(config)) {
        return config
    }

    // If no presets exist, assign an empty array.
    config.presets ??= []

    // If the presets are not empty, push them to the stack.
    config.presets.push(preset)

    // Return the levdwire configuration.
    return config
}
