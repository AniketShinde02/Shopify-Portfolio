/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./*.{html,js}", "./assets/js/**/*.js"],
    theme: {
        extend: {
            colors: {
                lime: '#C6F546',
                dark: '#0A0A0A',
                light: '#F4F4F4',
                grey: '#1F1F1F'
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
                outfit: ['Outfit', 'sans-serif'],
                manrope: ['Manrope', 'sans-serif']
            }
        },
    },
    plugins: [],
}
