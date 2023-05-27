/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.html"],
  theme: {
    colors: {
      'color-1': 'hsl(234, 25%, 52%)',
      'color-2':'hsl(233, 54%, 16%)',
      'color-3':'hsl(232, 10%, 56%)',
      'color-4':'hsl(341, 92%, 62%)',
      'color-5':'hsl(341, 100%, 83%)',
      'color-6':'hsl(0, 0%, 100%)',
      'color-7':'hsl(234, 100%, 97%)',
      'gradient-1-a':'hsl(322, 87%, 55%)',
      'gradient-1-b':'hsl(13, 100%, 64%)',
      'gradient-2-a':'hsl(237, 100%, 64%)',
      'gradient-2-b':'hsl(322, 87%, 55%)',
    },
    extend: {
      fontFamily: {
        'sans'  : ['Plus Jakarta Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

