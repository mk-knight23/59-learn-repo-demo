/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        '90s-navy': '#000080',
        '90s-green': '#008000',
        '90s-red': '#FF0000',
        '90s-yellow': '#FFFF00',
        '90s-silver': '#C0C0C0',
        '90s-teal': '#008080',
        '90s-maroon': '#800000',
        '90s-olive': '#808000',
        '90s-gray': '#E0E0E0',
        '90s-gray-light': '#F0F0F0'
      },
      fontFamily: {
        '90s-header': ['"Times New Roman"', 'Times', 'serif'],
        '90s-nav': ['"Comic Sans MS"', '"Chalkboard SE"', 'cursive'],
        '90s-code': ['"Courier New"', 'Courier', 'monospace'],
        '90s-body': ['Georgia', '"Times New Roman"', 'serif']
      },
      animation: {
        'marquee': 'marquee 20s linear infinite',
        'blink': 'blink 1s step-end infinite'
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(-100%)' }
        },
        blink: {
          '0%, 50%': { opacity: '1' },
          '51%, 100%': { opacity: '0' }
        }
      }
    }
  },
  plugins: []
}
