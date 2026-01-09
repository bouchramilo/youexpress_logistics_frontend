/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    darkMode: "class",
    theme: {
        extend: {
            colors: {
                // Mode clair
                "light-text": "#090707",
                "light-background": "#f8f6f6",
                "light-primary": "#879d7b",
                "light-secondary": "#92795d",
                "light-accent": "#325848",

                // États mode clair
                "light-error": "#d16666", // Rouge doux
                "light-success": "#68a67d", // Vert sage
                "light-warning": "#e6b469", // Or pâle
                "light-info": "#6a9fb5", // Bleu ardoise
                "light-muted": "#8a8a8a", // Gris neutre

                // Mode sombre
                "dark-text": "#f8f6f6",
                "dark-background": "#090707",
                "dark-primary": "#6e8462",
                "dark-secondary": "#a2896d",
                "dark-accent": "#a7cdbd",

                // États mode sombre
                "dark-error": "#e88a8a", // Rouge pastel
                "dark-success": "#7bc896", // Vert menthe
                "dark-warning": "#f0c97d", // Or lumineux
                "dark-info": "#7dbdd8", // Bleu ciel
                "dark-muted": "#a0a0a0", // Gris clair
            },
            fontSize: {
                sm: "0.750rem",
                base: "1rem",
                xl: "1.333rem",
                "2xl": "1.777rem",
                "3xl": "2.369rem",
                "4xl": "3.158rem",
                "5xl": "4.210rem",
            },
            fontFamily: {
                heading: "Zen Old Mincho",
                body: "Zen Old Mincho",
            },
            fontWeight: {
                normal: "400",
                bold: "700",
            },
        },
    },
    plugins: [],
    safelist: [
        // Backgrounds for light mode (used in ColorCard and elsewhere)
        "bg-light-text",
        "bg-light-background",
        "bg-light-primary",
        "bg-light-secondary",
        "bg-light-accent",
        "bg-light-error",
        "bg-light-success",
        "bg-light-warning",
        "bg-light-info",
        "bg-light-muted",
        // Text colors for light mode
        "text-light-text",
        "text-light-primary",
        // Dark mode prefixed classes for background colors
        "dark:bg-dark-text",
        "dark:bg-dark-background",
        "dark:bg-dark-primary",
        "dark:bg-dark-secondary",
        "dark:bg-dark-accent",
        "dark:bg-dark-error",
        "dark:bg-dark-success",
        "dark:bg-dark-warning",
        "dark:bg-dark-info",
        "dark:bg-dark-muted",
        // Dark mode prefixed classes for text colors
        "dark:text-dark-text",
        "dark:text-dark-primary",
        // Hover states
        "hover:bg-light-primary",
        "dark:hover:bg-dark-primary",
    ],
};