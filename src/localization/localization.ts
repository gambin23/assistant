import { createIntl, createIntlCache } from "react-intl";

const intl = createIntl(
    {
        // Locale of the application
        locale: 'en',
        // Locale of the fallback defaultMessage
        defaultLocale: 'en',
        messages: {},
    },
    createIntlCache()
)