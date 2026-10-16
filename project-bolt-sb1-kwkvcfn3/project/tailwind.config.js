/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        cream: {
          50: '#FBF8F3',
          100: '#F7F1E8',
          200: '#EFE4D2',
          300: '#E4D4BA',
          400: '#D5BE9C',
          500: '#C5A87E',
          600: '#B0905F',
          700: '#8E6F44',
          800: '#6B5236',
          900: '#4A3826',
        },
        rose: {
          50: '#FBF0F0',
          100: '#F5DDDC',
          200: '#EBC2C0',
          300: '#DDA19E',
          400: '#C97F7B',
          500: '#B05E5A',
          600: '#8F4A47',
          700: '#6E3836',
          800: '#4E2625',
          900: '#321918',
        },
        earth: {
          50: '#F7F3EF',
          100: '#EDE3D8',
          200: '#D9C5B1',
          300: '#C0A385',
          400: '#A1805F',
          500: '#83634A',
          600: '#6B4F3A',
          700: '#533E2D',
          800: '#3B2D21',
          900: '#241B15',
        },
        sage: {
          50: '#F2F5EF',
          100: '#E0E8D8',
          200: '#C2D0B0',
          300: '#9FB585',
          400: '#7D9A5E',
          500: '#637E48',
          600: '#4E6438',
          700: '#3B4E2B',
          800: '#2A3820',
          900: '#1A2414',
        },
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['"Jost"', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'fade-up': 'fadeUp 0.7s ease-out forwards',
        'fade-down': 'fadeDown 0.7s ease-out forwards',
        'scale-in': 'scaleIn 0.5s ease-out forwards',
        'slide-in': 'slideIn 0.4s ease-out forwards',
        'shimmer': 'shimmer 2s linear infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeDown: {
          '0%': { opacity: '0', transform: 'translateY(-24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        slideIn: {
          '0%': { opacity: '0', transform: 'translateX(-16px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
    },
  },
  plugins: [],
};
