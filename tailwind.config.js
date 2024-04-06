/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        'very-dark-magenta': 'hsl(300, 43%, 22%)',
        'soft-pink': 'hsl(333, 80%, 67%)',
        'dark-grayish-magenta': 'hsl(303, 10%, 53%)',
        'light-grayish-magenta': 'hsl(300, 24%, 96%)',
      },

      fontSize: {
       base: '15px',
      },

      fontFamily: {
        'LS-bold': 'LeagueSpartan-Bold',
        'LS-medium': 'LeagueSpartan-Medium',
        'LS-regular': 'LeagueSpartan-Regular',
      }
    },
  },
  plugins: [],
}