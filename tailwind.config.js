/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                nexus: "#facc15", // Rich Yellow-400 for a premium Nexus Hub feel
                dark: "#020617",
            },
        },
    },
    plugins: [],
}
