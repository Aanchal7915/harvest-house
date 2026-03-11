/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                brand: {
                    primary: '#5F7F2E',
                    dark: '#5A2D0C',
                    leaf: '#8FAF4F',
                    wheat: '#E28A20',
                    cream: '#F9F6F1',
                }
            },
            fontFamily: {
                sans: ['Outfit', 'sans-serif'],
            }
        },
    },
    plugins: [],
}
