import defaultTheme from 'tailwindcss/defaultTheme'

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#4B6A4B',
        rice: '#fefdf9',
        mist: '#bfcbb3',
      },
      fontFamily: {
        serif: ['"Noto Serif SC"', ...defaultTheme.fontFamily.serif],
      },
    },
  },
  plugins: [],
}
