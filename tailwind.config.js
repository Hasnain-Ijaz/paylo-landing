/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#0B1B3F',
        brand: { DEFAULT: '#2B59FF', dark: '#1E40D6', soft: '#EAF0FF' },
        sun: '#FFC93C',
        mist: '#F5F7FB',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Sora', 'Inter', 'sans-serif'],
      },
      boxShadow: {
        card: '0 20px 50px -20px rgba(11, 27, 63, 0.25)',
      },
    },
  },
  plugins: [],
}
