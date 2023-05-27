/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.html"],
  theme: {
    colors: {
      'cyan': 'hsl(185, 75%, 39%)',
      'blue':'hsl(229, 23%, 23%)',
      'grayish-blue': 'hsl(227, 10%, 46%)',
      'gray': 'hsl(0, 0%, 59%)',
      'white': 'hsl(0, 0%, 100%)',
    },
    extend: {
      backgroundImage: {
        'pattern-bottom':"url('images/bg-pattern-bottom.svg')",
        'pattern-top':"url('images/bg-pattern-top.svg')",
      },
      fontFamily: {
        'sans'  : ['Kumbh Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

