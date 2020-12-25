import { createIntl, createIntlCache } from "react-intl";

const intl = createIntl(
    {
        // Locale of the application
        locale: 'en-GB',
        // Locale of the fallback defaultMessage
        defaultLocale: 'en-GB',
        messages: {},
        formats: {
            date: {}
        }
    },
    createIntlCache()
)