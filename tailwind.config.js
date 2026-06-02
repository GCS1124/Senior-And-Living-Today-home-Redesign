/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ivory: {
          50: '#f0f6ff',
        },
        charcoal: '#122859',
        gold: {
          50: '#fff9df',
          100: '#fff3c9',
          200: '#ffeaa0',
          300: '#fef0bc',
          400: '#f9dc65',
          500: '#f9cb24',
          600: '#dca71f',
          700: '#b98310',
          800: '#8d6300',
          900: '#684500',
        },
        sage: {
          50: '#fafcff',
          100: '#eef5ff',
          200: '#d7e8fe',
          300: '#bfd4f3',
          400: '#6d8fcf',
          500: '#2e6aea',
          600: '#1f63d8',
          700: '#1c4b96',
          800: '#142e66',
          900: '#122859',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        heading: ['"Source Serif 4"', 'Georgia', 'serif'],
      },
      boxShadow: {
        soft: '0 20px 42px -34px rgba(15, 23, 42, 0.18)',
      },
      maxWidth: {
        shell: '76rem',
      },
    },
  },
  plugins: [],
}
