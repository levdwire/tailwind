import levdwireColors from './colors'

/**
 * Default theme for levdwire preset.
 */
export const defaultTheme = {
    fontFamily: {},
    extend: {
        extend: {
            // Levdwire :: Colors
            colors: {
                // Levdwire :: Color (Primary)
                primary: levdwireColors.primary,
                // Levdwire :: Color (Secondary)
                secondary: levdwireColors.secondary,
                // Levdwire :: Color (Light)
                light: levdwireColors.light,
                // Levdwire :: Color (Muted)
                muted: levdwireColors.muted,
                // Levdwire :: Color (Success)
                success: levdwireColors.success,
                // Levdwire :: Color (Info)
                info: levdwireColors.info,
                // Levdwire :: Color (Danger)
                danger: levdwireColors.danger,
                // Levdwire :: Color (Warning)
                warning: levdwireColors.warning
            },
        },
    }
}
