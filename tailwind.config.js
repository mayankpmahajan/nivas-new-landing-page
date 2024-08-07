/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        tusker: ['TuskerGrotesk'], 
        clash: ['ClashDisplay'],
        montserrat: ['Montserrat']
      },

      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideInFromLeft: {
          '0%': { transform: 'translateX(-100%)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        slideInFromBottom: {
          '0%': { transform: 'translateY(100%)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideOutFromBottom: {
          '0%': { transform: 'translateY(0%)', opacity: '1' },
          '100%': { transform: 'translateY(-100%)', opacity: '1' },
        }
      },
      animation: {
        fadeIn: 'fadeIn 3s ease-in-out', // You can adjust the duration and timing function
        slideInFromLeft: 'slideInFromLeft 1s ease-in-out',
        slideInFromBottom: 'slideInFromBottom 1s ease-in-out',
        slideOutFromBottom: 'slideOutFromBottom 1s ease-out',
        slideInFromBottom5: 'slideInFromBottom 1s ease-in-out',
        slideInFromBottom7: 'slideInFromBottom 1s ease-in-out',

      },
  },
  plugins: [],
}
}