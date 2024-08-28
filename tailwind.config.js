/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        body: '#fff',
        'body-secondary': '#EEEBE6',
        text: '#545454',
      },
      fontFamily: {
        body: ['Century Gothic Pro', 'sans-serif'],
        heading: ['Abril Fatface', 'serif'],
      },
      spacing: {
        headerr: '11.1458dvw',
        headerl: '6.875dvw',
      },
    },
  },
  plugins: [],
};
