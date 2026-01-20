/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                nexus: "#f59e0b", // Gold for Nexus Hub
                dark: "#000000",
            },
        },
    },
    plugins: [],
}
