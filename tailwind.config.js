/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ivory: {
          50: '#f8f4ec',
          100: '#f0e9dd',
          200: '#e3d7c6',
        },
        charcoal: '#17243d',
        ink: '#0d2345',
        navy: {
          50: '#eef4ff',
          100: '#dbe8ff',
          500: '#2b5ea7',
          700: '#194787',
          900: '#0d2b57',
        },
        gold: {
          50: '#fffbe7',
          100: '#fff4b8',
          200: '#ffe66b',
          300: '#ffd53a',
          400: '#f5c518',
          500: '#dba800',
          600: '#b58100',
          700: '#8e6500',
          800: '#664800',
          900: '#453100',
        },
        sage: {
          50: '#f2f6ff',
          100: '#e3edff',
          200: '#c8dcff',
          300: '#a9c7f5',
          400: '#88afe8',
          500: '#6d96d3',
          600: '#4f78ba',
          700: '#345d9b',
          800: '#24467b',
          900: '#18335b',
        },
        sky: {
          50: '#f2f6ff',
          100: '#e3edff',
          200: '#c8dcff',
          300: '#a9c7f5',
          400: '#88afe8',
          500: '#6d96d3',
          600: '#4f78ba',
          700: '#345d9b',
          800: '#24467b',
          900: '#18335b',
          950: '#0d2345',
        },
      },
      fontFamily: {
        sans: ['DM Sans', 'system-ui', 'sans-serif'],
        heading: ['Cormorant Garamond', 'Georgia', 'serif'],
      },
      boxShadow: {
        soft: '0 26px 70px -42px rgba(32, 48, 47, 0.38)',
        lift: '0 18px 45px -30px rgba(32, 48, 47, 0.34)',
      },
      maxWidth: {
        shell: '80rem',
      },
    },
  },
  plugins: [],
}
