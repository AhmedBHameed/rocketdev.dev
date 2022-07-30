module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  safelist: [
    'bg-zinc-200',
    'dark:bg-gray-800',
    'bg-neutral-100',
    'dark:bg-neutral-800',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      // colors: {
      //   'bg-dark-stone': 'var(--bg-dark-stone)',
      //   'bg-light-stone': 'var(--bg-light-stone)',
      // },
      animation: {
        shake: 'shake 0.82s cubic-bezier(0.36,0.07,0.19,0.97) both infinite',
      },
      keyframes: {
        shake: {
          '10%, 90%': {transform: 'translate3d(-1px, 0, 0)'},
          '20%, 80%': {transform: 'translate3d(1px, 0, 0)'},
          '30%, 50%, 70%': {transform: 'translate3d(-1px, 0, 0)'},
          '40%, 60%': {transform: 'translate3d(1px, 0, 0)'},
        },
      },
    },
  }, // customize the theme however you want here
  plugins: [require('@tailwindcss/typography')],
};

// module.exports = {
//   mode: 'jit', // this will enable Tailwind JIT compiler to make the build faster
//   content: ['./app/**/*.{ts,tsx,js,jsx}'], // Here we are going to tell Tailwind to use any .ts or .tsx file to purge the CSS
//   darkMode: 'class', // Use media queries for dark mode, customize it as you want
//   theme: {
//     extend: {
//       colors: {
//         'bg-dark-stone': 'var(--bg-dark-stone)',
//         'bg-light-stone': 'var(--bg-light-stone)',
//       },
//       animation: {
//         shake: 'shake 0.82s cubic-bezier(0.36,0.07,0.19,0.97) both infinite',
//       },
//       keyframes: {
//         shake: {
//           '10%, 90%': {transform: 'translate3d(-1px, 0, 0)'},
//           '20%, 80%': {transform: 'translate3d(1px, 0, 0)'},
//           '30%, 50%, 70%': {transform: 'translate3d(-1px, 0, 0)'},
//           '40%, 60%': {transform: 'translate3d(1px, 0, 0)'},
//         },
//       },
//     },
//   }, // customize the theme however you want here
//   variants: {}, // activate any variant you want here
//   plugins: [], // add any plugin you need here
// };
