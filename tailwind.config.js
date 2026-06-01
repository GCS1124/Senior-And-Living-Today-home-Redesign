/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ivory: {
          50: '#FAF7F1',
        },
        charcoal: '#252525',
        gold: {
          300: '#E8D1A5',
          400: '#D8BD84',
          500: '#C8A96A',
          600: '#B88F4F',
          700: '#A07932',
          800: '#7E5D23',
        },
        sage: {
          50: '#F4F7F1',
          100: '#E7EDE1',
          200: '#D6E0D0',
          400: '#AAB89E',
          500: '#8D9B83',
          600: '#728269',
          800: '#4E5948',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        heading: ['"Cormorant Garamond"', 'Georgia', 'serif'],
      },
      boxShadow: {
        soft: '0 22px 60px rgba(55, 37, 14, 0.08)',
      },
      maxWidth: {
        shell: '76rem',
      },
    },
  },
  plugins: [],
}
