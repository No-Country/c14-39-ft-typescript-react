/** @type {import('tailwindcss').Config} */

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}', 'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Dela Gothic One", sans-serif'],
        sans: ['Space Grotesk Variable, sans-serif'],
        body: ['Space Grotesk Variable, sans-serif'],
      },
      colors: {
        'base-black': 'var(--base-black)',
        'base-blue1': 'var(--base-blue1)',
        'base-blue2': 'var(--base-blue2)',
        'base-green1': 'var(--base-green1)',
        'base-green2': 'var(--base-green2)',
        'base-green3': 'var(--base-green3)',
        'base-white': 'var(--base-white)',
        'base-white-60': 'var(--base-white-60)',
        'base-green1-60': 'var(--base-green1-60)',
      },
      boxShadow: {
        'sh-2xl': 'var(--sh-2xl)',
        'sh-3xl': 'var(--sh-3xl)',
        'sh-lg': 'var(--sh-lg)',
        'sh-md': 'var(--sh-md)',
        'sh-sm': 'var(--sh-sm)',
        'sh-xl': 'var(--sh-xl)',
        'sh-xs': 'var(--sh-xs)',
      },
      keyframes: {
        'fade-in': {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
      },
      animation: {
        'fade-in': 'fade-in 0.3s ease-in-out',
      },
      backgroundImage: {
        'hero-image': 'var(--hero-image)',
      },
    },
  },
  plugins: ['flowbite/plugin'],
}
