module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  safelist: [
    'gap-1',
    'gap-2',
    'gap-3',
    'gap-4',

    'mx-1',
    'mx-2',
    'mx-3',
    'mx-4',
    'mx-5',
    'mx-6',
    'mx-7',
    'mx-8',
    'mx-9',
    'mx-10',
    'mx-11',
    'mx-12',

    'my-1',
    'my-2',
    'my-3',
    'my-4',
    'my-5',
    'my-6',
    'my-7',
    'my-8',
    'my-9',
    'my-10',
    'my-11',
    'my-12',

    'grid-cols-none',
    'grid-cols-1',
    'grid-cols-2',
    'grid-cols-3',
    'grid-cols-4',
    'grid-cols-5',
    'grid-cols-6',
    'grid-cols-7',
    'grid-cols-8',
    'grid-cols-9',
    'grid-cols-10',
    'grid-cols-11',
    'grid-cols-12',

    'sm:grid-cols-none',
    'sm:grid-cols-1',
    'sm:grid-cols-2',
    'sm:grid-cols-3',
    'sm:grid-cols-4',
    'sm:grid-cols-5',
    'sm:grid-cols-6',
    'sm:grid-cols-7',
    'sm:grid-cols-8',
    'sm:grid-cols-9',
    'sm:grid-cols-10',
    'sm:grid-cols-11',
    'sm:grid-cols-12',

    'md:grid-cols-none',
    'md:grid-cols-1',
    'md:grid-cols-2',
    'md:grid-cols-3',
    'md:grid-cols-4',
    'md:grid-cols-5',
    'md:grid-cols-6',
    'md:grid-cols-7',
    'md:grid-cols-8',
    'md:grid-cols-9',
    'md:grid-cols-10',
    'md:grid-cols-11',
    'md:grid-cols-12',

    'lg:grid-cols-none',
    'lg:grid-cols-1',
    'lg:grid-cols-2',
    'lg:grid-cols-3',
    'lg:grid-cols-4',
    'lg:grid-cols-5',
    'lg:grid-cols-6',
    'lg:grid-cols-7',
    'lg:grid-cols-8',
    'lg:grid-cols-9',
    'lg:grid-cols-10',
    'lg:grid-cols-11',
    'lg:grid-cols-12',

    'xl:grid-cols-none',
    'xl:grid-cols-1',
    'xl:grid-cols-2',
    'xl:grid-cols-3',
    'xl:grid-cols-4',
    'xl:grid-cols-5',
    'xl:grid-cols-6',
    'xl:grid-cols-7',
    'xl:grid-cols-8',
    'xl:grid-cols-9',
    'xl:grid-cols-10',
    'xl:grid-cols-11',
    'xl:grid-cols-12',

    '2xl:grid-cols-none',
    '2xl:grid-cols-1',
    '2xl:grid-cols-2',
    '2xl:grid-cols-3',
    '2xl:grid-cols-4',
    '2xl:grid-cols-5',
    '2xl:grid-cols-6',
    '2xl:grid-cols-7',
    '2xl:grid-cols-8',
    '2xl:grid-cols-9',
    '2xl:grid-cols-10',
    '2xl:grid-cols-11',
    '2xl:grid-cols-12',
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
