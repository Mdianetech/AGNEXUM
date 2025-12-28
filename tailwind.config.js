/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      screens: {
        'sm': '481px',
        'md': '768px',
        'lg': '1025px',
        'xl': '1280px',
      },
      colors: {
        primary: {
          50: '#e8f5e8',
          100: '#c8e6c8',
          200: '#a5d6a5',
          300: '#81c784',
          400: '#66bb6a',
          500: '#4caf50',
          600: '#2e7d32',
          700: '#1b5e20',
          800: '#2e7d32',
          900: '#1b5e20',
        },
        secondary: {
          50: '#fff3e0',
          100: '#ffe0b2',
          200: '#ffcc80',
          300: '#ffb74d',
          400: '#ffa726',
          500: '#ff9800',
          600: '#f57c00',
          700: '#ef6c00',
          800: '#e65100',
          900: '#bf360c',
        },
        gray: {
          50: '#fafafa',
          100: '#f5f5f5',
          200: '#eeeeee',
          300: '#e0e0e0',
          400: '#bdbdbd',
          500: '#9e9e9e',
          600: '#757575',
          700: '#616161',
          800: '#424242',
          900: '#212121',
        }
      },
      fontFamily: {
        sans: ['Roboto', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'h1-mobile': ['1.75rem', { lineHeight: '2.25rem', fontWeight: '700' }],
        'h1-tablet': ['2.25rem', { lineHeight: '2.5rem', fontWeight: '700' }],
        'h1-desktop': ['3rem', { lineHeight: '1.2', fontWeight: '700' }],
        'h2-mobile': ['1.5rem', { lineHeight: '2rem', fontWeight: '600' }],
        'h2-tablet': ['1.875rem', { lineHeight: '2.25rem', fontWeight: '600' }],
        'h2-desktop': ['2.25rem', { lineHeight: '2.5rem', fontWeight: '600' }],
        'body-mobile': ['0.875rem', { lineHeight: '1.25rem', fontWeight: '400' }],
        'body-tablet': ['1rem', { lineHeight: '1.5rem', fontWeight: '400' }],
        'body-desktop': ['1.125rem', { lineHeight: '1.75rem', fontWeight: '400' }],
      },
      animation: {
        'fade-in': 'fadeIn 0.3s ease-in-out',
        'scale-in': 'scaleIn 0.2s ease-out',
        'bounce-subtle': 'bounceSubtle 2s infinite',
        'slide-down': 'slideDown 0.3s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.95)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        bounceSubtle: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-5px)' },
        },
        slideDown: {
          '0%': { opacity: '0', transform: 'translateY(-10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      boxShadow: {
        'soft': '0 2px 15px -3px rgba(0, 0, 0, 0.07), 0 10px 20px -2px rgba(0, 0, 0, 0.04)',
        'medium': '0 4px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
        'strong': '0 10px 40px -10px rgba(0, 0, 0, 0.15), 0 2px 10px -2px rgba(0, 0, 0, 0.05)',
      },
    },
  },
  plugins: [],
};