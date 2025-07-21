/** @type {import('tailwindcss').Config} */
const config = {
    darkMode: 'class',
    content: ['./app/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
    theme: {
        container: {
            center: true,
            padding: {
                DEFAULT: '1rem',
                sm: '1rem',
                md: '1.5rem',
                lg: '2rem',
            },
            screens: {
                sm: '480px',
                md: '640px',
                lg: '768px',
                xl: '1024px',
                '2xl': '1280px',
            },
        },
        extend: {
            padding: {
                section: '6rem',
                'section-sm': '4rem',
            },
        },
    },
    plugins: [],
};

export default config;
